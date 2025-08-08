import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size: 40px;
  font-weight: bold;
  padding: 30px;
`;

function NewsHeader({ title }) {
  return <HeaderContainer>{title}</HeaderContainer>;
}

export default NewsHeader;
