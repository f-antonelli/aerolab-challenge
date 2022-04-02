import useHistory from 'hooks/useHistory'
import CloseSrc from 'assets/icons/close.png'
import CartSrc from 'assets/icons/cart.png'
import useModal from 'hooks/useModal'

import {
  Cart,
  Close,
  ContainerProduct,
  Cost,
  Img,
  ModalHistory,
  Name,
  Product,
  Title,
  WrapperHistory,
} from './styles'

const History = () => {
  const { history } = useHistory()
  const { isOpen, closeModal, openModal, stopProp } = useModal()

  return (
    <>
      <Cart src={CartSrc} onClick={openModal} />
      {isOpen && (
        <WrapperHistory onClick={closeModal}>
          <ModalHistory right={isOpen ? '0' : '30%'} onClick={stopProp}>
            <Close src={CloseSrc} onClick={closeModal} />
            <Title>Reedem History</Title>
            <ContainerProduct>
              {history.map((product, index) => (
                <Product key={index}>
                  <Img src={product.img.url} />
                  <Name>{product.name}</Name>
                  <Cost>{product.cost}</Cost>
                </Product>
              ))}
            </ContainerProduct>
          </ModalHistory>
        </WrapperHistory>
      )}
    </>
  )
}

export default History
