import LogoSrc from 'assets/aerolab-logo.svg'
import CoinSrc from 'assets/icons/coin.svg'

import { BoxPoints, CoinIcon, ContainerUser, Logo, TextHeader, WrapperHeader } from './styles'

const Header = () => {
  return (
    <WrapperHeader>
      <Logo src={LogoSrc} />
      <ContainerUser>
        <TextHeader>John Kite</TextHeader>
        <BoxPoints>
          <TextHeader>6000</TextHeader>
          <CoinIcon src={CoinSrc} />
        </BoxPoints>
      </ContainerUser>
    </WrapperHeader>
  )
}

export default Header
