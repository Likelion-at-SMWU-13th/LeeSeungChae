import React from "react";
import twinkleStar from "../assets/twinkle-star.svg";
import searchBtn from "../assets/search-btn.png";

const SearchBar = () => {
  return (
    <>
      <div>
        <img src={twinkleStar} />
        <p>AI</p>
      </div>
      <p>개발자로 취업하고 싶어요</p>
      <img src={searchBtn} />
    </>
  );
};

export default SearchBar;
