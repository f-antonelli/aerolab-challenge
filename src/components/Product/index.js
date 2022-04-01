import CoinSrc from 'assets/icons/coin.svg'
import postRedeemProduct from 'services/postRedeemProduct'

import {
  ButtonRedeem,
  Card,
  Category,
  Coin,
  ContainerImg,
  ContainerPoints,
  ContainerText,
  LowPoints,
  HoverWrapper,
  Name,
  Points,
  ProductImg,
  Shop,
  WrapperLowPoins,
} from './styles'

const Product = ({ id, name, cost, img, category, needPoints, canBuy }) => {
  return (
    <Card>
      <ContainerImg>
        <ProductImg src={img.hdUrl} />
      </ContainerImg>
      <ContainerText>
        <Category>{category}</Category>
        <Name>{name}</Name>
      </ContainerText>
      {canBuy ? (
        <>
          <Shop />
          <HoverWrapper>
            <ContainerPoints>
              <Points>{cost}</Points>
              <Coin padding="0.4rem" src={CoinSrc} width="2.1rem" />
            </ContainerPoints>
            <ButtonRedeem onClick={() => postRedeemProduct(id)}>Redeem now</ButtonRedeem>
          </HoverWrapper>
        </>
      ) : (
        <WrapperLowPoins>
          <LowPoints>You need {needPoints}</LowPoints>
          <Coin padding=".2rem" src={CoinSrc} width="1.3rem" />
        </WrapperLowPoins>
      )}
    </Card>
  )
}

export default Product
