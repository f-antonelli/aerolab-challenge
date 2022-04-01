import Product from 'components/Product'
import ProductsContext from 'context/ProductsContext'
import useUser from 'hooks/useUser'
import { useContext } from 'react'

import { Grid } from './styles'

const ProductList = ({ products }) => {
  const { cantProds } = useContext(ProductsContext)
  const { user } = useUser()

  return (
    <>
      <Grid>
        {products.slice(cantProds - 16, cantProds).map(({ _id, name, cost, img, category }) => {
          const canBuy = user.points >= cost
          const needPoints = cost - user.points

          return (
            <Product
              key={name}
              canBuy={canBuy}
              category={category}
              cost={cost}
              id={_id}
              img={img}
              name={name}
              needPoints={needPoints}
            />
          )
        })}
      </Grid>
      s
    </>
  )
}

export default ProductList
