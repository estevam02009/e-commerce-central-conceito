export interface Product {
    id: string
    name: string
    price: number
    originalPrice?: number
    category: 'roupas' | 'acessorios'
    subcategory: string
    image: string
    images: string[]
    description: string
    sizes?: string[]
    colors?: string[]
    inStock: boolean
    isNew?: boolean
    isSale?: boolean
} 

export interface CartItem {
    product: Product
    quantity: number
    selectedSize?: string
    selectedColor?: string
}

export interface User {
    id: string
    name: string
    email: string
    wishlist: string
}