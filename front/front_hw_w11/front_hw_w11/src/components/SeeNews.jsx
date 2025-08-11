import React from "react";
import * as S from "./SeeNews.Styled.js";

function SeeNews({ showNews }) {
  return (
    <S.BtnContainer>
      <S.SeeNewsBtn onClick={showNews}>Hot News🔥</S.SeeNewsBtn>
    </S.BtnContainer>
  );
}

export default SeeNews;
