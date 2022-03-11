import styled from "styled-components";

export const Card = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  width: 17.2rem;
  height: auto;
  padding: 2rem;
  background: #ffffff;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.1);
`;

export const ContainerImg = styled.div`
  flex: 0.7;
`;

export const ProductImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
`;

export const Category = styled.p`
  color: var(--category);
`;

export const Name = styled.h4`
  font-size: 1.1rem;
  color: var(--secondary);
`;
