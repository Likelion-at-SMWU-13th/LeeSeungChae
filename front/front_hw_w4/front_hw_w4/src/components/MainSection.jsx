import React from "react";
import MenuBar from "./MenuBar";
import SearchBar from "./SearchBar";
import styled from "styled-components";

const WelcomeText = styled.div`
  width: 1300%;
  height: 13rem;
  display: flex;
  flex-direction: column;
  border-top: 1px solid rgb(234, 231, 228);
`;

const WelcomeText1 = styled.span`
  color: #ff6000;
  text-align: center;
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 1.8rem;
  padding-top: 1rem;
`;

const WelcomeText2 = styled.span`
  text-align: center;
  font-family: Pretendard;
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding-top: 0.4rem;
`;

const MainContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainSection = () => {
  return (
    <MainContentBox>
      <WelcomeText>
        <WelcomeText1>멋쟁이사자처럼과</WelcomeText1>
        <WelcomeText2>맞춤형 성장으로 목표를 이뤄보세요.</WelcomeText2>
      </WelcomeText>
      <SearchBar />
      <MenuBar />
    </MainContentBox>
  );
};

export default MainSection;
