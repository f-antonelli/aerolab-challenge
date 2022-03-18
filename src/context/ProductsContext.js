import { createContext, useState } from 'react'

const ProductsContext = createContext({})

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [cantProds, setCantProds] = useState(16)

  return (
    <ProductsContext.Provider value={{ products, setProducts, cantProds, setCantProds }}>
      {children}
    </ProductsContext.Provider>
  )
}

export { ProductsProvider }
export default ProductsContext
