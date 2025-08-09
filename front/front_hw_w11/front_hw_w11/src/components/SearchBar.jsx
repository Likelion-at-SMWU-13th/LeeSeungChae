import React from "react";
import * as S from "./SearchBar.Styled.js";

function SearchBar({ value, handleChange, showSearchNews }) {
  return (
    <S.SearchBarContainer>
      <S.SearchInput value={value} onChange={handleChange} />
      <S.SearchBtn onClick={showSearchNews}>🔍</S.SearchBtn>
    </S.SearchBarContainer>
  );
}

export default SearchBar;
