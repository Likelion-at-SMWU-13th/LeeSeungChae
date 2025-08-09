import React from "react";
import defaultImg from "../assets/default_news_img.jpg";
import * as S from "./NewsList.Styled.js";

function NewsList({ news = [] }) {
  return (
    <S.CardContainer>
      {news.map((item, index) => (
        <S.Card key={index}>
          <S.Title>{item.title}</S.Title>
          <S.Img
            src={item.urlToImage || defaultImg}
            onError={(e) => {
              e.currentTarget.src = defaultImg;
            }}
          ></S.Img>
          <S.Desc>{item.description}</S.Desc>
          <S.Date>{item.publishedAt}</S.Date>
        </S.Card>
      ))}
    </S.CardContainer>
  );
}

export default NewsList;
