import React from "react";
import profile from "../assets/profile.png";
import styled from "styled-components";

const MyClass = styled.button`
  background-color: white;
  border: none;
  text-align: center;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  cursor: pointer;
`;

const ProfileImg = styled.img`
  width: 2.5625rem;
  height: 2.5625rem;
  flex-shrink: 0;
  aspect-ratio: 1/1;
  padding: 1.5rem;
  cursor: pointer;
`;

const UserBox = styled.div`
  display: flex;
  margin-left: 25rem;
`;

const MyClassBtn = () => {
  return (
    <UserBox>
      <MyClass>내 강의실</MyClass>
      <ProfileImg src={profile} />
    </UserBox>
  );
};

export default MyClassBtn;
