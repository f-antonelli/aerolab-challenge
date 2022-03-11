import styled from "styled-components";

export const WrapperHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5rem;
  padding: 0 2.6rem;
`;

export const Logo = styled.img`
  width: 2.5rem;
  height: auto;
`;

export const ContainerUser = styled.div`
  display: flex;
  align-items: center;
`;

export const TextHeader = styled.h2`
  color: var(--secondary);
  font-size: 1.3rem;
  font-weight: 600;
`;

export const BoxPoints = styled.div`
  display: flex;
  padding: .8rem 1rem;
  background: var(--bgtext);
  border-radius: 6.25rem;
  margin-left: 1rem;
`;
export const CoinIcon = styled.img`
  width: 1.5rem;
  height: auto;
  margin-left: .5rem;
`;
