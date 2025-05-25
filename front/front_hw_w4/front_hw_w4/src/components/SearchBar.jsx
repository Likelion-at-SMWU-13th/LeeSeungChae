import React from "react";
import twinkleStar from "../assets/twinkle-star.svg";
import searchBtn from "../assets/search-btn.png";
import styled from "styled-components";

const AiEffectBox = styled.div`
  display: flex;
  justify-content: center;
  width: 4rem;
  height: 2rem;
  margin-top: 0.7rem;
  flex-shrink: 0;
  border-radius: 1.25rem;
  background: #ffefdb;
`;

const StarImg = styled.img`
  width: 1rem;
  margin-right: 0.2rem;
`;

const AiText = styled.span`
  width: lrem;
  height: 1rem;
  margin-top: 0.43rem;
  color: #ff7a14;
  text-align: center;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 1000;
  line-height: normal;
`;

const SearchBarText = styled.p`
  color: #ff7a14;
  font-size: 1.0625rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-right: 18rem;
`;

const SearchBtnImg = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  padding: 1rem;
  flex-shrink: 0;
  aspect-ratio: 1/1;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    opacity: 80%;
  }
`;

const SearchBox = styled.div`
  display: flex;
  justify-content: space-around;
  width: 40.625rem;
  height: 3.375rem;
  flex-shrink: 0;
  border-radius: 3.125rem;
  border: 2px solid #ff6000;
  background: #fff;
`;

const SearchBar = () => {
  return (
    <SearchBox>
      <AiEffectBox>
        <StarImg src={twinkleStar} />
        <AiText>AI</AiText>
      </AiEffectBox>
      <SearchBarText>개발자로 취업하고 싶어요</SearchBarText>
      <SearchBtnImg src={searchBtn} />
    </SearchBox>
  );
};

export default SearchBar;
