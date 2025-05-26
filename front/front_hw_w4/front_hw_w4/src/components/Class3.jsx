import React from "react";
import class3 from "../assets/class3.png";
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

const Class3 = () => {
  return (
    <ClassBox>
      <ClassImg src={class3} />
      <ClassName>AI로 완성하는 교수님 극찬 논문 작성법</ClassName>
    </ClassBox>
  );
};

export default Class3;
