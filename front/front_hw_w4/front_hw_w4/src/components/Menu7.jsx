import React from "react";
import menu7 from "../assets/menu7.png";
import styled from "styled-components";

const MenuImg = styled.img`
  width: 3.875rem;
  height: 3.875rem;
  flex-shrink: 0;
  aspect-ratio: 1/1;
  border-radius: 1.375rem;
`;

const MenuName = styled.p`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Menu7 = () => {
  return (
    <>
      <MenuImg src={menu7} />
      <MenuName>업무 생산성</MenuName>
    </>
  );
};

export default Menu7;
