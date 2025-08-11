import React from "react";
import * as S from "./SearchBar.Styled.js";

function SearchBar({ value, handleChange, showSearchNews }) {
  return (
    <S.SearchBarContainer>
      <S.SearchInput
        value={value}
        placeholder="Search for a news headline..."
        onChange={handleChange}
      />
      <S.SearchBtn onClick={showSearchNews}>🔍</S.SearchBtn>
    </S.SearchBarContainer>
  );
}

export default SearchBar;
