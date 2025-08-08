import React from "react";

function NewsList({ news = [] }) {
  return (
    <div>
      {news.map((item, index) => (
        <div key={index}>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default NewsList;
