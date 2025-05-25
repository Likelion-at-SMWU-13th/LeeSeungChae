import React from "react";
import logo from "../assets/likelion-logo.svg";
import MyClassBtn from "./MyClassBtn";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <>
      <img src={logo} />
      <NavBar />
      <MyClassBtn />
    </>
  );
};

export default Header;
