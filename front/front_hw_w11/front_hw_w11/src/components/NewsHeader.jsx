import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  background-color: black;
`;

function NewsHeader({ title }) {
  return <HeaderContainer>{title}</HeaderContainer>;
}

export default NewsHeader;
