import { useProducts } from 'hooks/useProducts'

import {
  BtnSort,
  ContainerSort,
  Title,
  CantProds,
  BtnPrev,
  BtnNext,
  WrapperButtons,
} from './styles'

const Sort = () => {
  const { sortByLowest, sortByHighest, showfirstPage, showSecondPage, cantProds } = useProducts()

  return (
    <ContainerSort>
      <CantProds>{cantProds} of 32 products</CantProds>
      <Title>Sort By:</Title>
      <BtnSort>Most recent</BtnSort>
      <BtnSort onClick={sortByLowest}>Lowest price</BtnSort>
      <BtnSort onClick={sortByHighest}>Highest price</BtnSort>
      <WrapperButtons>
        <BtnPrev display={cantProds === 16 ? 'none' : 'block'} onClick={showfirstPage} />
        <BtnNext display={cantProds === 32 ? 'none' : 'block'} onClick={showSecondPage} />
      </WrapperButtons>
    </ContainerSort>
  )
}

export default Sort
