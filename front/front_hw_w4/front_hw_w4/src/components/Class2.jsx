import React from "react";
import class2 from "../assets/class2.png";
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

const Class2 = () => {
  return (
    <>
      <ClassImg src={class2} />
      <ClassName>성공적인 리더를 위한 필수 역량</ClassName>
    </>
  );
};

export default Class2;
