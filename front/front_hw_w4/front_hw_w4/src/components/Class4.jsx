import React from "react";
import class4 from "../assets/class4.png";
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
  margin-left: 4rem;

  &:hover {
    transform: scale(1.1);
    opacity: 60%;
  }
`;

const Class4 = () => {
  return (
    <ClassBox>
      <ClassImg src={class4} />
      <ClassName>한 번에 합격하는 SQLP 과정</ClassName>
    </ClassBox>
  );
};

export default Class4;
