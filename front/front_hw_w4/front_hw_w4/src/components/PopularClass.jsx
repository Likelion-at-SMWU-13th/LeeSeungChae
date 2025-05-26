import React from "react";
import ClassCategory1 from "./ClassCategory1";
import ClassCategory2 from "./ClassCategory2";
import ClassCategory3 from "./ClassCategory3";
import ClassCategory4 from "./ClassCategory4";
import ClassCategory5 from "./ClassCategory5";
import Class1 from "./Class1";
import Class2 from "./Class2";
import Class3 from "./Class3";
import Class4 from "./Class4";
import styled from "styled-components";

const FooterText1 = styled.span`
  color: #000;
  font-size: 1.625rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding: 0.4rem;
`;

const FooterText2 = styled.span`
  color: #918989;
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: 0.4rem;
`;

const FooterText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-left: 17.2rem;
`;

const ClassCategoryBox = styled.div`
  display: flex;
  padding: 1.5rem;
  margin-left: 16rem;
`;

const ClassesBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
`;

const PopularClass = () => {
  return (
    <>
      <FooterText>
        <FooterText1>실시간 인기있는 강의</FooterText1>
        <FooterText2>
          최근 많은 수강생들이 선택한 인기 강의를 확인해보세요.
        </FooterText2>
      </FooterText>
      <ClassCategoryBox>
        <ClassCategory1 />
        <ClassCategory2 />
        <ClassCategory3 />
        <ClassCategory4 />
        <ClassCategory5 />
      </ClassCategoryBox>
      <ClassesBox>
        <Class1 />
        <Class2 />
        <Class3 />
        <Class4 />
      </ClassesBox>
    </>
  );
};

export default PopularClass;
