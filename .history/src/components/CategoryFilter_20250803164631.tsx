import React from "react"

interface CategoryFilterProps {
    selectedCategory: string
    onCategoryChange: (category: string) => void
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({ selectedCategory, onCategoryChange }) => {

    const categories = [
        { id: "todos", label: "Todas as categorias", count: 120 },
        { id: "roupas", label: "Roupas", count: 80 },
        { id: "acessorios", label: "Acessórios", count: 40 },
    ]

    return (
        <div className="bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex space-x-8 overflow-x-auto py-4"></div>
            </div>
        </div>
    )
}