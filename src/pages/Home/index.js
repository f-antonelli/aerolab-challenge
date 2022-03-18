import ProductList from 'components/ProductsList'
import Banner from 'components/Banner'
import Header from 'components/Header'
import Sort from 'components/Sort'
import ProductsContext from 'context/ProductsContext'
import { useProducts } from 'hooks/useProducts'

const Home = () => {
  const { products } = useProducts(ProductsContext)

  return (
    <>
      <Header />
      <Banner />
      <Sort products={products} />
      <ProductList products={products} />
    </>
  )
}

export default Home
