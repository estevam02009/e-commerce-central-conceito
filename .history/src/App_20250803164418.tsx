// import React from "react"
import { CategoryFilter } from "./components/CategoryFilter"
import { Header } from "./components/Header"

function App() {

  const [selectedCategory, setSelectedCategory] = useState("todos")

  return (  
    <div className="min-h-screen bg-gray-50">
      <Header
        onCartClick={() => {}}
        cartItemsCount={0}
        searchQuery=""
        onSearchChange={() => {}}
      />

      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
    </div>
  )
}

export default App
