import React from "react";
import class3 from "../assets/class3.png";
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

const Class3 = () => {
  return (
    <>
      <ClassImg src={class3} />
      <ClassName>AI로 완성하는 교수님 극찬 논문 작성법</ClassName>
    </>
  );
};

export default Class3;
