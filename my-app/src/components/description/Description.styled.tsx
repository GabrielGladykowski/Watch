import styled from "styled-components";

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 100%;
  height: 100%;
  position: relative;

  @media (min-width: 1250px) {
    flex-direction: row;
  }
`;

export const DescriptionHeader = styled.h1`
  display: flex;
  font-size: 40px;
  position: absolute;
  top: 30px;
  text-align: center;
  font-weight: 500;

  @media (min-width: 1250px) {
    top: 35%;
    right: 10%;
  }
  @media (min-width: 2560px) {
    top: 40%;
    right: 10%;
  }
`;

export const DescriptionSecondTitle = styled.p`
  font-size: 30px;
  position: absolute;
  top: -45px;

  @media (min-width: 1250px) {
    visibility: hidden;
  }
`;

export const DescriptionText = styled.p`
  font-size: 20px;
  text-align: center;
  display: flex;
  position: relative;
  justify-content: center;
  padding: 0 10px 10px 10px;
  width: auto;
  height: max-content;

  @media (min-width: 1250px) {
    text-align: right;
    padding: 0 5% 10px 10px;
  }
`;
