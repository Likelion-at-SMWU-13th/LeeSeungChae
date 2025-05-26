import React from "react";
import class2 from "../assets/class2.png";
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

const Class2 = () => {
  return (
    <ClassBox>
      <ClassImg src={class2} />
      <ClassName>성공적인 리더를 위한 필수 역량</ClassName>
    </ClassBox>
  );
};

export default Class2;
