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