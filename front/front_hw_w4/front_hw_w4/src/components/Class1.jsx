import React from "react";
import class1 from "../assets/class1.png";
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

const Class1 = () => {
  return (
    <>
      <ClassImg src={class1} />
      <ClassName>2주만에 완성하는 SQLD 합격 로드맵</ClassName>
    </>
  );
};

export default Class1;
