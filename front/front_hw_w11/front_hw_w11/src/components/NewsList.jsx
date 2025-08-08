import React from "react";

function NewsList({ news = [] }) {
  return (
    <Card>
      {news.map((item, index) => (
        <div key={index}>
          <Title>{item.title}</Title>
          <Img src={item.urlToImage}></Img>
          <Desc>{item.description}</Desc>
          <Author>{item.author}</Author>
          <Date>{item.publishedAt}</Date>
        </div>
      ))}
    </Card>
  );
}

export default NewsList;
