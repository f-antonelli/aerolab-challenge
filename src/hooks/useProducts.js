import ProductsContext from 'context/ProductsContext'
import { useContext, useEffect } from 'react'
import getProducts from 'services/getProducts'

export const useProducts = () => {
  const { products, setProducts, cantProds, setCantProds } = useContext(ProductsContext)

  useEffect(() => {
    getProducts().then((products) => {
      setProducts(products)
    })
  }, [setProducts])

  const sortByLowest = () => {
    const sortedproducts = products.sort((a, b) => a.cost - b.cost)

    setProducts([...sortedproducts])
  }

  const sortByHighest = () => {
    const sortedproducts = products.sort((a, b) => b.cost - a.cost)

    setProducts([...sortedproducts])
  }

  const showfirstPage = () => setCantProds(cantProds - 16)

  const showSecondPage = () => setCantProds(cantProds + cantProds)

  return {
    products,
    setProducts,
    cantProds,
    sortByLowest,
    sortByHighest,
    showfirstPage,
    showSecondPage,
  }
}
