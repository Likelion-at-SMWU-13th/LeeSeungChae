import React from "react";
import menu2 from "../assets/menu2.png";
import styled from "styled-components";

const MenuImg = styled.img`
  width: 3.875rem;
  height: 3.875rem;
  flex-shrink: 0;
  aspect-ratio: 1/1;
  border-radius: 1.375rem;
  cursor: pointer;
`;

const MenuName = styled.p`
  color: #000;
  text-align: center;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;

  &:hover {
    transform: scale(1.05);
    opacity: 80%;
  }
`;

const Menu2 = () => {
  return (
    <Menu>
      <MenuImg src={menu2} />
      <MenuName>국비지원 받기</MenuName>
    </Menu>
  );
};

export default Menu2;
