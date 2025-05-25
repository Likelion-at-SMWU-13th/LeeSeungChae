import React from "react";
import styled from "styled-components";

const OnClickClassCategory = styled.button`
  width: 5.3125rem;
  height: 2.1875rem;
  flex-shrink: 0;
  border-radius: 1.875rem;
  color: white;
  border: 1px solid #ececec;
  background: #1e1e1e;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    opacity: 60%;
  }
`;

const ClassCategory1 = () => {
  return (
    <>
      <OnClickClassCategory>무료 강의</OnClickClassCategory>
    </>
  );
};

export default ClassCategory1;
