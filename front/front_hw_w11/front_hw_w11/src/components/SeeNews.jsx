import React from "react";
import styled from "styled-components";

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const SeeNewsBtn = styled.button`
  color: white;
  background-color: pink;
  font-size: 20px;
  font-weight: medium;
  border-radius: 50px;
  padding: 15px;
  border: none;
`;

function SeeNews({ showNews }) {
  return (
    <BtnContainer>
      <SeeNewsBtn onClick={showNews}>인기 뉴스 보기👀</SeeNewsBtn>
    </BtnContainer>
  );
}

export default SeeNews;
