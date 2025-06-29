import { useEffect, useState } from "react";
import axios from "axios";

const MyItem = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/items")
      .then((res) => {
        const favoriteItems = res.data.filter((item) => item.rating >= 3.0);
        setItems(favoriteItems);
      })
      .catch((err) => {
        console.error("에러 발생", err);
      });
  }, []);

  return (
    <div>
      <h3>승채의 최애 아이템</h3>
      <div>
        {items.map((item) => (
          <div key={item.id}>
            <img src={item.product_img} alt={item.name} />
            <h4>{item.name}</h4>
            <p>브랜드: {item.brand}</p>
            <p>가격: {item.price}원</p>
            <p>평점: {item.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyItem;
