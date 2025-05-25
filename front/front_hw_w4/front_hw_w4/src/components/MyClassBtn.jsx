import React from "react";
import profile from "../assets/profile.png";
import styled from "styled-components";

const MyClass = styled.button`
  text-align: center;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const ProfileImg = styled.img`
  width: 2.5625rem;
  height: 2.5625rem;
  flex-shrink: 0;
  aspect-ratio: 1/1;
`;

const MyClassBtn = () => {
  return (
    <>
      <MyClass>내 강의실</MyClass>
      <ProfileImg src={profile} />
    </>
  );
};

export default MyClassBtn;
