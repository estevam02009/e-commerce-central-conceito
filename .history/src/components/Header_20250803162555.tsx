import React from "react";
import { Search, ShoppingBag, Heart, User, Menu } from "lucide-react";

interface HeaderProps {
    onCartClick: () => void;
    cartItemsCount: number;
    searchQuery: string;
    onSearchChange: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
    onCartClick,
    cartItemsCount,
    searchQuery,
    onSearchChange
}) => {
    return (
        <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* LOGO */}
                    <div className="flex items-center">
                        <h1 className="text-2xl font-bold text-slate-800s">Central</h1>
                        <span className="ml-1 text-sm text-amber-600 font-medium">Conceito</span>
                    </div>
                </div>
            </div>
        </header>
    )
}