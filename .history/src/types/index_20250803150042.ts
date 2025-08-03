export interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  category: 'roupas' | 'acessorios'
} 