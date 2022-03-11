import Banner from "components/Banner";
import Header from "components/Header";
import ProductList from "components/ProductsList";
import { useEffect, useState } from "react";
import getProducts from "services/getProducts";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((products) => {
      setProducts(products);
    });
  }, [setProducts]);

  return (
    <>
      <Header />
      <Banner />
      <ProductList products={products} />
    </>
  );
}

export default App;
