import Product from "components/Product";
import { Grid } from "./styles";

const ProductList = ({ products }) => {
  console.log(products);
  return (
    <Grid>
      {
        products.map(({ id, name, cost, img, category }) => 
          <Product 
            id={id} 
            key={id} 
            name={name} 
            cost={cost} 
            img={img} 
            category={category}
          />
        )
      }
    </Grid>
  );
};

export default ProductList;
