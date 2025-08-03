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
                <div className="flex space-x-8 overflow-x-auto py-4">
                    {categories.map((category) => {
                        <button
                            key={category.id}
                            onClick={() => onCategoryChange(category.id)}
                            className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === category.id
                                    ? 'bg-slate-800 text-white'
                                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                                }`}
                        >
                            {category.name}
                            <span className={`ml-2 text-xs ${selectedCategory === category.id ? 'text-gray-300' : 'text-gray-400'
                                }`}>
                                {category.count}
                            </span>
                        </button>
                    })}
                </div>
            </div>
        </div>
    )
}