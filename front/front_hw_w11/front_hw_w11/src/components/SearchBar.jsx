import React from "react";
import styled from "styled-components";

function SearchBar({ showSearchNews }) {
  return (
    <div>
      <input></input>
      <button onClick={showSearchNews}>검색</button>
    </div>
  );
}

export default SearchBar;
