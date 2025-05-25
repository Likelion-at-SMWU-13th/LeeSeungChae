import React from "react";
import styled from "styled-components";

const Nav = styled.button`
  text-align: center;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const NavBar = () => {
  return (
    <>
      <Nav>전체강의</Nav>
      <Nav>부트캠프</Nav>
      <Nav>이벤트</Nav>
      <Nav>기업문의</Nav>
    </>
  );
};

export default NavBar;
