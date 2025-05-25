import React from "react";
import Menu1 from "./Menu1";
import Menu2 from "./Menu2";
import Menu3 from "./Menu3";
import Menu4 from "./Menu4";
import Menu5 from "./Menu5";
import Menu6 from "./Menu6";
import Menu7 from "./Menu7";
import Menu8 from "./Menu8";
import styled from "styled-components";

const MenuBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const MenuBar = () => {
  return (
    <MenuBox>
      <Menu1 />
      <Menu2 />
      <Menu3 />
      <Menu4 />
      <Menu5 />
      <Menu6 />
      <Menu7 />
      <Menu8 />
    </MenuBox>
  );
};

export default MenuBar;
