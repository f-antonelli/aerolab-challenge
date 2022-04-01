import styled from 'styled-components'

export const WrapperHeader = styled.div`
  z-index: 999999999;
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5rem;
  padding: 0 2.6rem;
  background-color: #fff;
`

export const Logo = styled.img`
  width: 2.5rem;
  height: auto;
`

export const ContainerUser = styled.div`
  display: flex;
  align-items: center;
`

export const TextHeader = styled.h2`
  color: var(--secondary);
  font-size: 1.3rem;
  font-weight: 600;
`

export const BoxPoints = styled.div`
  display: flex;
  padding: 0.8rem 1rem;
  background: var(--bgtext);
  border-radius: 6.25rem;
  margin-left: 1rem;
`
export const CoinIcon = styled.img`
  width: 1.5rem;
  height: auto;
  margin-left: 0.5rem;
`
