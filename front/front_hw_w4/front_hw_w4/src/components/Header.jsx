import React from "react";
import logo from "../assets/likelion-logo.svg";
import MyClassBtn from "./MyClassBtn";
import NavBar from "./NavBar";
import styled from "styled-components";

const HeaderBox = styled.div`
  display: flex;
  justify-content: left;
  margin-left: 15rem;
`;

const Logo = styled.img`
  width: 9.1875rem;
  height: 1rem;
  padding-top: 0.8rem;
  padding-left: 3rem;
  flex-shrink: 0;
  aspect-ratio: 147/16;
  margin-top: 1.5rem;
  margin-right: 2rem;
  cursor: pointer;
`;

const Header = () => {
  return (
    <HeaderBox>
      <Logo src={logo} />
      <NavBar />
      <MyClassBtn />
    </HeaderBox>
  );
};

export default Header;
