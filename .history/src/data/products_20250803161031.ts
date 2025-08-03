import { Product } from '../types';

export const products: Product[] = [
    {
        id: '1',
        name: 'Classic Denim Jacket',
        price: 89.99,
        originalPrice: 109.99,
        category: 'clothing',
        subcategory: 'jackets',
        image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg',
        images: [
            'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg',
            'https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg'
        ],
        description: 'Premium quality denim jacket with a classic fit. Made from 100% cotton denim with a vintage wash finish.',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['Light Blue', 'Dark Blue'],
        inStock: true,
        isNew: false,
        isSale: true
    },
    {
        id: '2',
        name: 'Silk Blouse',
        price: 124.99,
        category: 'clothing',
        subcategory: 'tops',
        image: 'https://images.pexels.com/photos/1381556/pexels-photo-1381556.jpeg',
        images: [
            'https://images.pexels.com/photos/1381556/pexels-photo-1381556.jpeg',
            'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg'
        ],
        description: 'Elegant silk blouse perfect for both professional and casual occasions. Features a relaxed fit with button-up front.',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['White', 'Black', 'Navy'],
        inStock: true,
        isNew: true
    },
    {
        id: '3',
        name: 'Leather Handbag',
        price: 199.99,
        category: 'accessories',
        subcategory: 'bags',
        image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg',
        images: [
            'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg',
            'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg'
        ],
        description: 'Luxurious genuine leather handbag with spacious interior and elegant design. Perfect for everyday use.',
        colors: ['Black', 'Brown', 'Tan'],
        inStock: true,
        isNew: true
    },
    {
        id: '4',
        name: 'Wool Sweater',
        price: 79.99,
        category: 'clothing',
        subcategory: 'sweaters',
        image: 'https://images.pexels.com/photos/1127000/pexels-photo-1127000.jpeg',
        images: [
            'https://images.pexels.com/photos/1127000/pexels-photo-1127000.jpeg',
            'https://images.pexels.com/photos/1439261/pexels-photo-1439261.jpeg'
        ],
        description: 'Cozy wool sweater with a comfortable fit. Perfect for layering during cooler weather.',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['Gray', 'Navy', 'Cream'],
        inStock: true
    },
    {
        id: '5',
        name: 'Gold Statement Necklace',
        price: 89.99,
        category: 'accessories',
        subcategory: 'jewelry',
        image: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg',
        images: [
            'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg',
            'https://images.pexels.com/photos/1191536/pexels-photo-1191536.jpeg'
        ],
        description: 'Bold gold-plated statement necklace that adds elegance to any outfit. Adjustable chain length.',
        colors: ['Gold'],
        inStock: true,
        isNew: true
    },
    {
        id: '6',
        name: 'Summer Maxi Dress',
        price: 94.99,
        category: 'clothing',
        subcategory: 'dresses',
        image: 'https://images.pexels.com/photos/1381553/pexels-photo-1381553.jpeg',
        images: [
            'https://images.pexels.com/photos/1381553/pexels-photo-1381553.jpeg',
            'https://images.pexels.com/photos/1381554/pexels-photo-1381554.jpeg'
        ],
        description: 'Flowing maxi dress perfect for summer occasions. Features a flattering silhouette and breathable fabric.',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['Floral', 'Solid Blue', 'Black'],
        inStock: true
    },
    {
        id: '7',
        name: 'Designer Sunglasses',
        price: 149.99,
        originalPrice: 189.99,
        category: 'acessorios',
        subcategory: 'eyewear',
        image: 'https://images.pexels.com/photos/1007027/pexels-photo-1007027.jpeg',
        images: [
            'https://images.pexels.com/photos/1007027/pexels-photo-1007027.jpeg',
            'https://images.pexels.com/photos/1007030/pexels-photo-1007030.jpeg'
        ],
        description: 'Premium designer sunglasses with UV protection. Classic aviator style with modern touches.',
        colors: ['Black', 'Tortoise', 'Gold'],
        inStock: true,
        isSale: true
    },
    {
        id: '8',
        name: 'Tailored Blazer',
        price: 169.99,
        category: 'clothing',
        subcategory: 'blazers',
        image: 'https://images.pexels.com/photos/1381559/pexels-photo-1381559.jpeg',
        images: [
            'https://images.pexels.com/photos/1381559/pexels-photo-1381559.jpeg',
            'https://images.pexels.com/photos/1381560/pexels-photo-1381560.jpeg'
        ],
        description: 'Professional tailored blazer with a modern cut. Perfect for business meetings and formal occasions.',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['Black', 'Navy', 'Gray'],
        inStock: true,
        isNew: true
    }
];

export const getProductsByCategory = (category: string) => {
    if (category === 'all') return products;
    return products.filter(product => product.category === category);
};

export const getProductById = (id: string) => {
    return products.find(product => product.id === id);
};