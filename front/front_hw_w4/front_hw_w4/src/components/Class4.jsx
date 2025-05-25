import React from "react";
import class4 from "../assets/class4.png";
import styled from "styled-components";

const ClassImg = styled.img`
  width: 14rem;
  height: 9rem;
  flex-shrink: 0;
  border-radius: 0.625rem;
`;

const ClassName = styled.p`
  color: #000;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 500;
  line-height: normal;
`;

const Class4 = () => {
  return (
    <>
      <ClassImg src={class4} />
      <ClassName>한 번에 합격하는 SQLP 과정</ClassName>
    </>
  );
};

export default Class4;
