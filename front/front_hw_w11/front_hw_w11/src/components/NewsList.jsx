import React from "react";
import Styled from "styled-components";

const CardContainer = Styled.div`
display: flex;
flex-wrap: wrap;
width: 100%;
gap: 20px;
margin: 30px;
justify-content: center;
border-radius: 10px;
flex-direction: row;
`;

const Card = Styled.div`
background-color: white !important;
display: flex;
flex-direction: column;
justify-content: center;
border-radius: 10px;
width: 500px;
height: 600px;
margin: 30px;
box-shadow: 3px 6px 16px rgba(0, 0, 0, 0.15);
`;

const Title = Styled.h3`
padding: 10px;
color: #4f4f4f;
font-size: 24px;
font-weight: bold;
`;

const Img = Styled.img`
width: 500px;
height: 250px;
`;

const Desc = Styled.p`
padding: 10px;
font-family: "GowunBatang-Regular";
font-size: 18px;
color: #666666;
`;

const Date = Styled.span`
padding: 10px;
font-family: "GowunBatang-Regular";
color: lightgrey;
`;

function NewsList({ news = [] }) {
  return (
    <CardContainer>
      {news.map((item, index) => (
        <Card key={index}>
          <Title>{item.title}</Title>
          <Img src={item.urlToImage}></Img>
          <Desc>{item.description}</Desc>
          <Date>{item.publishedAt}</Date>
        </Card>
      ))}
    </CardContainer>
  );
}

export default NewsList;
