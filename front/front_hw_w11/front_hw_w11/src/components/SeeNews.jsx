import React from "react";
import styled from "styled-components";

const SearchInput = styled.input``;

const SeeNewsBtn = styled.button``;

function SeeNews({ showNews }) {
  return (
    <div>
      <SeeNewsBtn onClick={showNews}>뉴스 보기</SeeNewsBtn>
    </div>
  );
}

export default SeeNews;
