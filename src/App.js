import { ProductsProvider } from 'context/ProductsContext'
import { UserProvider } from 'context/UserContext'
import Home from 'pages/Home'

function App() {
  return (
    <UserProvider>
      <ProductsProvider>
        <Home />
      </ProductsProvider>
    </UserProvider>
  )
}

export default App
