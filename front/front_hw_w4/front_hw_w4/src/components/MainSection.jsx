import React from "react";
import MenuBar from "./MenuBar";
import SearchBar from "./SearchBar";
import styled from "styled-components";

const WelcomeText = styled.div`
  width: 80rem;
  height: 11.875rem;
  flex-shrink: 0;
  background: #fef5ef;
  filter: blur(40px);
`;

const WelcomeText1 = styled.p`
  color: #ff6000;
  text-align: center;
  font-family: Pretendard;
  font-size: 2.125rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const WelcomeText2 = styled.p`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 2.125rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const MainSection = () => {
  return (
    <>
      <WelcomeText>
        <WelcomeText1>멋쟁이사자처럼과</WelcomeText1>
        <WelcomeText2>맞춤형 성장으로 목표를 이뤄보세요.</WelcomeText2>
      </WelcomeText>
      <SearchBar />
      <MenuBar />
    </>
  );
};

export default MainSection;
