import LogoSrc from 'assets/aerolab-logo.svg'
import CoinSrc from 'assets/icons/coin.svg'
import AddPoints from 'components/AddPoints'
import History from 'components/History'
import useUser from 'hooks/useUser'

import { BoxPoints, CoinIcon, ContainerUser, Logo, TextHeader, WrapperHeader } from './styles'

const Header = () => {
  const { user } = useUser()

  return (
    <WrapperHeader>
      <Logo src={LogoSrc} />
      <ContainerUser>
        <TextHeader>{user.name}</TextHeader>
        <BoxPoints>
          <TextHeader>{user.points}</TextHeader>
          <CoinIcon src={CoinSrc} />
        </BoxPoints>
        <AddPoints />
        <History />
      </ContainerUser>
    </WrapperHeader>
  )
}

export default Header
