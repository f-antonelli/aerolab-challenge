import styled from 'styled-components'
import { keyframes } from 'styled-components'

export const Cart = styled.img`
  cursor: pointer;
  width: 35px;
  height: 35px;
`
export const Close = styled.img`
  cursor: pointer;
  z-index: 5001;
  position: absolute;
  top: 1rem;
  right: 0.5rem;
  width: 30px;
  height: 30px;
`
export const WrapperHistory = styled.div`
  z-index: 999;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  animation: ${(props) => props.animation} 2s all;
`
export const ModalHistory = styled.div`
  z-index: 5000;
  position: fixed;
  top: 0;
  right: ${(props) => props.right};
  background-color: #ffffff;
  width: 30%;
  height: 100vh;
  padding-top: 2.5rem;
  transition: all 2s;
`
export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  border-bottom: 1px solid var(--bgtext);
  padding: 0 2rem;
`

export const ContainerProduct = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 2rem;
`
export const Product = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--bgtext);
`

export const Img = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
`

export const Name = styled.h3`
  font-size: 1rem;
`

export const Cost = styled.span`
  font-size: 1rem;
`

const opa = keyframes`
from {
  opacity 0;
}
  to {
    opacity: 1;
  }

  `
