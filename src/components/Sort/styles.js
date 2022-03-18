import styled from "styled-components";
import arrowprev from "assets/icons/arrow-left.svg";
import arrownext from "assets/icons/arrow-right.svg";

export const ContainerSort = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 2rem 8rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--bgtext);
`;

export const CantProds = styled.p`
  font-size: 1.8rem;
  color: var(--secondary);
  padding-right: 1rem;
  border-right: 1px solid var(--bgtext);
`;

export const Title = styled.h3`
  font-size: 1.7em;
  font-weight: 400;
  color: var(--category);
  padding-left: 1rem;
`;

export const BtnSort = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  font-size: 1.3rem;
  text-align: center;
  padding: 0.6rem 1.3rem;
  border-radius: 4rem;
  background-color: var(--bgtext);
  color: var(--category);
  margin: 0 0.6rem;
  :focus,
  :hover {
    background-color: var(--primary);
    color: #ffffff;
  }
`;

export const WrapperButtons = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
`;

export const BtnPrev = styled.div`
  cursor: pointer;
  display: ${props => props.display};
  background: url(${arrowprev}) no-repeat;
  width: 3rem;
  height: 3rem;
  background-size: contain;
  margin-right: 0.5rem;
`;

export const BtnNext = styled.div`
  cursor: pointer;
  display: ${props => props.display};
  background: url(${arrownext}) no-repeat;
  width: 3rem;
  height: 3rem;
  background-size: contain;
`;
