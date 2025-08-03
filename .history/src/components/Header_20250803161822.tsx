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
        <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-40"></header>
    )
}