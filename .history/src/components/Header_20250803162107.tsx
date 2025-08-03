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
            <div className="container mx-auto flex items-center justify-between py-4 px-6">
                <div className="flex items-center gap-4">
                    <Menu className="w-6 h-6 cursor-pointer" />
                    <span className="text-xl font-bold">E-Commerce</span>
                </div>
                <div className="flex-1 mx-6">
                    <div className="relative">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={e => onSearchChange(e.target.value)}
                            placeholder="Search products"
                            className="w-full border rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <button className="relative" onClick={onCartClick} aria-label="Cart">
                        <ShoppingBag className="w-6 h-6" />
                        {cartItemsCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5">
                                {cartItemsCount}
                            </span>
                        )}
                    </button>
                    <Heart className="w-6 h-6 cursor-pointer" />
                    <User className="w-6 h-6 cursor-pointer" />
                </div>
            </div>
        </header>
    )
}