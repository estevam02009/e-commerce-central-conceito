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
                    {/* Logo */}
                    <div className="flex items-center">
                        <h1 className="text-2xl font-bold text-slate-800">LUXE</h1>
                        <span className="ml-1 text-sm text-amber-600 font-medium">FASHION</span>
                    </div>

                    {/* Search Bar - Hidden on mobile */}
                    <div className="hidden md:flex flex-1 max-w-md mx-8">
                        <div className="relative w-full">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                            <input
                                type="text"
                                placeholder="Search for clothes, accessories..."
                                value={searchQuery}
                                onChange={(e) => onSearchChange(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-gray-50"
                            />
                        </div>
                    </div>

                    {/* Navigation Icons */}
                    <div className="flex items-center space-x-4">
                        {/* Mobile search */}
                        <button className="md:hidden p-2 text-gray-600 hover:text-gray-800 transition-colors">
                            <Search className="h-5 w-5" />
                        </button>

                        {/* Wishlist */}
                        <button className="p-2 text-gray-600 hover:text-gray-800 transition-colors">
                            <Heart className="h-5 w-5" />
                        </button>

                        {/* Account */}
                        <button className="p-2 text-gray-600 hover:text-gray-800 transition-colors">
                            <User className="h-5 w-5" />
                        </button>

                        {/* Cart */}
                        <button
                            onClick={onCartClick}
                            className="relative p-2 text-gray-600 hover:text-gray-800 transition-colors"
                        >
                            <ShoppingBag className="h-5 w-5" />
                            {cartItemsCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                                    {cartItemsCount}
                                </span>
                            )}
                        </button>

                        {/* Mobile menu */}
                        <button className="md:hidden p-2 text-gray-600 hover:text-gray-800 transition-colors">
                            <Menu className="h-5 w-5" />
                        </button>
                    </div>
                </div>

                {/* Mobile search bar */}
                <div className="md:hidden pb-3">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <input
                            type="text"
                            placeholder="Search for clothes, accessories..."
                            value={searchQuery}
                            onChange={(e) => onSearchChange(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-gray-50"
                        />
                    </div>
                </div>
            </div>
        </header>
    )
}