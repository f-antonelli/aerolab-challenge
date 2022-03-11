import React from "react";
import {
  Card,
  Category,
  ContainerImg,
  ContainerText,
  Name,
  ProductImg,
} from "./styles";

const Product = ({ id, key, name, cost, img, category }) => {
  console.log(img)
  return (
    <Card>
      <ContainerImg>
        <ProductImg src={img.hdUrl} />
      </ContainerImg>
      <ContainerText>
        <Category>{category}</Category>
        <Name>{name}</Name>
      </ContainerText>
    </Card>
  );
};

export default Product;
