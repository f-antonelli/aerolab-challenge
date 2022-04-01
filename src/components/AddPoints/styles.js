import styled from 'styled-components'

export const Points = styled.img`
  cursor: pointer;
  width: 35px;
  height: 35px;
  margin: 0 0.5rem;
`

export const ContainerPoints = styled.ul`
  position: fixed;
  top: 6rem;
  right: 1rem;
  min-width: 6rem;
  padding: 0.5rem 0;
  border-radius: 0.8rem;
  background-color: #fff;
`

export const Add = styled.p`
  font-size: 1.2rem;
`

export const Coin = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 0.5rem;
`

export const Box = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.2rem 0;
  min-width: 10rem;
  :hover {
    background-color: var(--bgtext);
  }
`

export const WrapperModal = styled.div`
  z-index: 999;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
`
