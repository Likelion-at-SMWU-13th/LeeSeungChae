import React from "react";
import styled from "styled-components";

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const SeeNewsBtn = styled.button`
  color: #adbdcd;
  border: 2px solid #adbdcd;
  background-color: white;
  font-family: "Cafe24Decobox";
  font-size: 20px;
  font-weight: medium;
  border-radius: 50px;
  padding: 15px;
`;

function SeeNews({ showNews }) {
  return (
    <BtnContainer>
      <SeeNewsBtn onClick={showNews}>Hot News 🔥</SeeNewsBtn>
    </BtnContainer>
  );
}

export default SeeNews;
