import Product from "components/Product";
import ProductsContext from "context/ProductsContext";
import { useContext } from "react";
import { Grid } from "./styles";

const ProductList = ({ products }) => {
  const { cantProds } = useContext(ProductsContext);
  return (
    <>
      <Grid>
        {products
          .slice(cantProds - 16, cantProds)
          .map(({ id, name, cost, img, category }) => (
            <Product
              key={name}
              name={name}
              cost={cost}
              img={img}
              category={category}
            />
          ))}
      </Grid>
    </>
  );
};

export default ProductList;
