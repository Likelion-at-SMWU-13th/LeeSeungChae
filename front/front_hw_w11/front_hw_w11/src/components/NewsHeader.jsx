import React from "react";
import * as S from "./NewsHeader.Styled.js";

function NewsHeader({ title }) {
  return <S.HeaderContainer>{title}</S.HeaderContainer>;
}

export default NewsHeader;
