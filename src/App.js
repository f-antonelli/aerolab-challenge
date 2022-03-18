import { ProductsProvider } from 'context/ProductsContext'
import Home from 'pages/Home'

function App() {
  return (
    <ProductsProvider>
      <Home />
    </ProductsProvider>
  )
}

export default App
