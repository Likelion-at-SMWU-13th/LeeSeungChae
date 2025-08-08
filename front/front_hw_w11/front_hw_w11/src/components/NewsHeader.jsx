import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  color: #8fb1d2ff;
  display: flex;
  justify-content: center;
  font-size: 80px;
  font-weight: bold;
  padding: 30px;
  font-family: "Cafe24Meongi-W-v1.0";
`;

function NewsHeader({ title }) {
  return <HeaderContainer>{title}</HeaderContainer>;
}

export default NewsHeader;
