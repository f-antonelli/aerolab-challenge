import styled from 'styled-components'
import ShopBlueSrc from 'assets/icons/buy-blue.svg'
import ShopWhiteSrc from 'assets/icons/buy-white.svg'

export const HoverWrapper = styled.div`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  width: 100%;
  height: 100%;
  background: var(--hoverprods);
  box-shadow: 20px 15px 47px -16px rgba(0, 0, 0, 0.75);
  transition: all 0.5s ease-in-out;
`

export const WrapperLowPoins = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  display: flex;
  align-items: center;
  background-color: rgba(97, 97, 97, 0.7);
  border-radius: 5rem;
  padding: 0.5rem;
`

export const LowPoints = styled.p`
  z-index: 100;
  color: white;
  font-size: 1rem;
  font-weight: 300;
`

export const Shop = styled.div`
  z-index: 100;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: url(${ShopBlueSrc});
  background-size: contain;
  width: 45px;
  height: 45px;
`
export const Card = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 17.2rem;
  height: auto;
  padding: 2rem;
  background: #ffffff;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.1);
  :hover {
    ${HoverWrapper} {
      opacity: 1 !important;
    }
    ${Shop} {
      background: url(${ShopWhiteSrc}) no-repeat !important;
      background-size: contain !important;
    }
  }
`

export const ContainerImg = styled.div`
  flex: 0.7;
`

export const ProductImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const ContainerText = styled.div`
  flex: 0.3;
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  border-top: 3px solid var(--background);
`

export const Category = styled.p`
  color: var(--category);
`

export const Name = styled.h4`
  font-size: 1.1rem;
  color: var(--secondary);
`

//  Hover Items
export const ContainerPoints = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.8rem;
`

export const Points = styled.p`
  font-size: 2.3rem;
  color: #ffffff;
`

export const Coin = styled.img`
  width: ${(props) => props.width};
  height: auto;
  margin-left: 0.4rem;
  padding-top: ${(props) => props.padding};
`

export const ButtonRedeem = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  width: 90%;
  background: #ffffff;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--secondary);
  padding: 0.5rem 0;
  text-align: center;
  border-radius: 2rem;
  :hover {
    background-color: var(--background);
  }
`
