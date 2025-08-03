import { useState, useEffect } from 'react'
import type { CartItem, Product } from '../types'

export const useCart = () => {
    const [cartItems, setCartItems] = useState<CartItem[]>([])

    useEffect(() => {
        const savedCart = localStorage.getItem('cart')
        if (savedCart) {
            setCartItems(JSON.parse(savedCart))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems))
    }, [cartItems])

    const addToCart = (product: Product, selectedSize?: string, selectedColor?: string) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(
                item => item.product.id === product.id && 
                item.selectedSize === selectedSize && 
                item.selectedColor === selectedColor)
            if (existingItem) {
                return prevItems.map(item => 
                    item.product.id === product.id && 
                    item.selectedSize === selectedSize && 
                    item.selectedColor === selectedColor 
                    ? { ...item, quantity: item.quantity + 1 } 
                    : item)
            } else {
                return [...prevItems, { product, quantity: 1, selectedSize, selectedColor }]
            }
        })
    }

    const removeFromCart = (productId: string, selectedSize?: string, selectedColor?: string) => {
        setCartItems(prevItems => 
            prevItems.filter(item => 
            !(item.product.id === productId && 
                item.selectedSize === selectedSize && 
                item.selectedColor === selectedColor)
            )
        )
    }   

    const updateQuantity = (productId: string, newQuantity: number, selectedSize?: string, selectedColor?: string) => {
        if (newQuantity <= 0) {
            removeFromCart(productId, selectedSize, selectedColor)
            return
        }

        setCartItems(prevItems => 
            prevItems.map(item => 
                item.product.id === productId && 
                item.selectedSize === selectedSize && 
                item.selectedColor === selectedColor 
                ? { ...item, quantity: newQuantity } 
                : item
            )
        )
    }

    const clearCart = () => {
        setCartItems([])
    }

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0)
    }

    const getTotalItems = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0)
    }

    return {
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalPrice,
        getTotalItems,
    }
}