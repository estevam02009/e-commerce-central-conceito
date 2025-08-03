import { Header } from "./components/Header"

function App() {

  return (  
    <div className="min-h-screen bg-gray-50">
      <Header
        onCartClick={() => {}}
        cartItemsCount={0}
        searchQuery=""
        onSearchChange={() => {}}
      />
    </div>
  )
}

export default App
