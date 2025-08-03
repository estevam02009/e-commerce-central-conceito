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
                return prevItems.map(item => item.product.id === product.id && item.selectedSize === selectedSize && item.selectedColor === selectedColor ? { ...item, quantity: item.quantity + 1 } : item)
            }
        })
    }
}