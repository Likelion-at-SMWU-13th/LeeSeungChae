import React from "react";
import styled from "styled-components";

const NavBox = styled.div`
  display: flex;
  margin-right: 20rem;
`;

const Nav = styled.button`
  background-color: white;
  border: none;
  text-align: center;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding: 1.5rem;
  cursor: pointer;
`;

const NavBar = () => {
  return (
    <NavBox>
      <Nav>전체강의</Nav>
      <Nav>부트캠프</Nav>
      <Nav>이벤트</Nav>
      <Nav>기업문의</Nav>
    </NavBox>
  );
};

export default NavBar;
