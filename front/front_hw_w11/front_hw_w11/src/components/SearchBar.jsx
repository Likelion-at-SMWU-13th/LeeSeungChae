import React from "react";
import styled from "styled-components";

const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  padding: 20px;
`;

const SearchInput = styled.input`
  color: black;
  background-color: white;
  border: 1px solid #e6e6e6;
  width: 550px;
  height: 55px;
  font-size: 20px;
  border-radius: 10px 0 0 10px;

  &:focus {
    outline: none;
  }
`;

const SearchBtn = styled.button`
  background-color: white;
  color: blue;
  border: 1px solid #e6e6e6;
  font-size: 20px;
  border-radius: 0 10px 10px 0;
  padding: 10px;
  cursor: pointer;
`;

function SearchBar({ value, handleChange, showSearchNews }) {
  return (
    <SearchBarContainer>
      <SearchInput value={value} onChange={handleChange} />
      <SearchBtn onClick={showSearchNews}>🔍</SearchBtn>
    </SearchBarContainer>
  );
}

export default SearchBar;
