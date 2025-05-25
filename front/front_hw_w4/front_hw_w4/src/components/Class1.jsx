import React from "react";
import class1 from "../assets/class1.png";
import styled from "styled-components";

const ClassImg = styled.img`
  width: 18rem;
  height: 13rem;
  flex-shrink: 0;
  border-radius: 0.625rem;
  cursor: pointer;
`;

const ClassName = styled.p`
  color: #000;
  text-align: center;
  font-size: 1.1rem;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
`;

const ClassBox = styled.div`
  display: flex;
  flex-direction: column;

  &:hover {
    transform: scale(1.1);
    opacity: 60%;
  }
`;

const Class1 = () => {
  return (
    <ClassBox>
      <ClassImg src={class1} />
      <ClassName>2주만에 완성하는 SQLD 합격 로드맵</ClassName>
    </ClassBox>
  );
};

export default Class1;
