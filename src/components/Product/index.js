import CoinSrc from 'assets/icons/coin.svg'
import {
  ButtonRedeem,
  Card,
  Category,
  Coin,
  ContainerImg,
  ContainerPoints,
  ContainerText,
  HoverWrapper,
  Name,
  Points,
  ProductImg,
} from "./styles";

const Product = ({ id, name, cost, img, category }) => {
  return (
    <Card>
      <ContainerImg>
        <ProductImg src={img.hdUrl} />
      </ContainerImg>
      <ContainerText>
        <Category>{category}</Category>
        <Name>{name}</Name>
      </ContainerText>

      <HoverWrapper>
        <ContainerPoints>
          <Points>{cost}</Points>
          <Coin src={CoinSrc} />
        </ContainerPoints>
        <ButtonRedeem>Redeem now</ButtonRedeem>
      </HoverWrapper>
    </Card>
  );
};

export default Product;
