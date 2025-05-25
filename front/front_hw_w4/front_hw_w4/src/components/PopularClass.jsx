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

const PopularClass = () => {
  return (
    <>
      <h1>실시간 인기있는 강의</h1>
      <p>최근 많은 수강생들이 선택한 인기 강의를 확인해보세요.</p>
      <ClassCategory1 />
      <ClassCategory2 />
      <ClassCategory3 />
      <ClassCategory4 />
      <ClassCategory5 />
      <Class1 />
      <Class2 />
      <Class3 />
      <Class4 />
    </>
  );
};

export default PopularClass;
