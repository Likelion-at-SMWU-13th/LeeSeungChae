import React from "react";
import styled from "styled-components";

const ClassCategory = styled.button`
  width: 5.3125rem;
  height: 2.1875rem;
  flex-shrink: 0;
  border-radius: 1.875rem;
  border: 1px solid #ececec;
  font-weight: 500;
  background-color: white;
  margin-left: 1rem;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    opacity: 60%;
  }
`;

const ClassCategory3 = () => {
  return (
    <>
      <ClassCategory>코딩 입문</ClassCategory>
    </>
  );
};

export default ClassCategory3;
