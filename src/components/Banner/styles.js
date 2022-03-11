import styled from "styled-components";
import BannerSrc from "assets/header-x1.png";

export const WrapperBanner = styled.div`
  position: relative;
  width: 100%;
  height: 27rem;
`;

export const BannerImg = styled.div`
  background-image: url(${BannerSrc});
  background-size: cover;
  background-position: right;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Title = styled.h1`
  z-index: 10;
  position: absolute;
  bottom: 3rem;
  left: 5rem;
  font-size: 5rem;
  font-weight: 900;
  color: #ffffff;
  @media (max-width: 970px) {
    display: none;
  }
`;
