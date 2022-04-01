import PointsSrc from 'assets/icons/points.png'
import CoinSrc from 'assets/icons/coin.svg'
import useModal from 'hooks/useModal'
import postAddPoints from 'services/postAddPoints'
import useUser from 'hooks/useUser'
import getUser from 'services/getUser'
import { Toaster } from 'react-hot-toast'

import { ContainerPoints, Points, Add, Box, Coin, WrapperModal } from './styles'

const AddPoints = () => {
  const { isOpen, openModal, closeModal } = useModal()
  const { setUser } = useUser()

  const sendPoints = (value) => {
    postAddPoints(value)
    getUser().then((user) => {
      setUser(user)
    })
  }

  return (
    <>
      <Points src={PointsSrc} onClick={openModal} />
      {isOpen && (
        <WrapperModal onClick={closeModal}>
          <ContainerPoints>
            <Box onClick={() => sendPoints(1000)}>
              <Coin src={CoinSrc} />
              <Add>1000</Add>
            </Box>
            <Box onClick={() => sendPoints(5000)}>
              <Coin src={CoinSrc} />
              <Add>5000</Add>
            </Box>
            <Box onClick={() => sendPoints(7500)}>
              <Coin src={CoinSrc} />
              <Add>7500</Add>
            </Box>
          </ContainerPoints>
        </WrapperModal>
      )}
      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  )
}

export default AddPoints
