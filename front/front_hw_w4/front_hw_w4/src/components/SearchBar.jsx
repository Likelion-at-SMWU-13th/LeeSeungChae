import React from "react";
import twinkleStar from "../assets/twinkle-star.svg";
import searchBtn from "../assets/search-btn.png";
import styled from "styled-components";

const AiEffectBox = styled.div`
  width: 3.125rem;
  height: 1.5rem;
  flex-shrink: 0;
  border-radius: 1.25rem;
  background: #ffefdb;
`;

const StarImg = styled.img`
  width: 1rem;
  height: 1rem;
  flex-shrink: 0;
  aspect-ratio: 1/1;
`;

const AiText = styled.p`
  color: #ff7a14;
  text-align: center;
  font-family: Pretendard;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const SearchBarText = styled.p`
  color: #ff7a14;
  text-align: center;
  font-family: Pretendard;
  font-size: 1.0625rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const SearchBtnImg = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
  aspect-ratio: 1/1;
`;

const SearchBar = () => {
  return (
    <>
      <AiEffectBox>
        <StarImg src={twinkleStar} />
        <AiText>AI</AiText>
      </AiEffectBox>
      <SearchBarText>개발자로 취업하고 싶어요</SearchBarText>
      <SearchBtnImg src={searchBtn} />
    </>
  );
};

export default SearchBar;
