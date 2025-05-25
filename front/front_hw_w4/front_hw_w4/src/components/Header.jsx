import React from "react";
import logo from "../assets/likelion-logo.svg";
import MyClassBtn from "./MyClassBtn";
import NavBar from "./NavBar";
import styled from "styled-components";

const Logo = styled.img`
  width: 9.1875rem;
  height: 1rem;
  flex-shrink: 0;
  aspect-ratio: 147/16;
`;

const Header = () => {
  return (
    <>
      <Logo src={logo} />
      <NavBar />
      <MyClassBtn />
    </>
  );
};

export default Header;
