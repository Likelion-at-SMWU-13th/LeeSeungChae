import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Title = styled.div`
  margin-top: 80px;
`;

const ViewAll = styled.button`
  font-size: 20px;
  color: rgb(214, 204, 169);
  font-weight: bold;
  background-color: rgb(246, 246, 244);
  cursor: pointer;
  border-radius: 50px;
  text-align: center;
  border: solid 2px rgb(214, 204, 169);
  padding: 15px;
  margin: 10px;
  &:hover {
    opacity: 0.8;
    scale: 1.05;
  }
`;

const ViewFav = styled.button`
  font-size: 20px;
  color: rgb(214, 204, 169);
  font-weight: bold;
  background-color: rgb(246, 246, 244);
  cursor: pointer;
  border-radius: 50px;
  text-align: center;
  border: solid 2px rgb(214, 204, 169);
  padding: 15px;
  margin: 10px;
  &:hover {
    opacity: 0.8;
    scale: 1.05;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(236, 233, 210);
  border-radius: 20px;
  height: 100vh;
  border: solid 2px rgb(214, 204, 169);
`;

const ItemBoxes = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 80px;
`;

const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 15px;
  padding: 20px;
  margin: 40px;
  background-color: rgb(231, 231, 216);
  box-shadow: 0 2px 8px rgb(122, 120, 120);
  &:hover {
    opacity: 0.8;
    scale: 1.05;
  }
`;

const ItemImg = styled.img`
  width: 300px;
  height: 300px;
  border: solid 1.5px rgb(223, 227, 223);
`;

const ItemName = styled.span`
  font-size: 24px;
  font-weight: bold;
  margin-top: 10px;
  color: rgb(0, 0, 0);
`;

const ItemBrand = styled.span`
  color: gray;
  padding-top: 5px;
`;

const ItemPrice = styled.p`
  margin-top: 50px;
  color: rgb(202, 161, 161);
  font-weight: bold;
`;
const ItemRating = styled.p``;

const MyItem = ({ my_name }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/items")
      .then((res) => {
        const favoriteItems = res.data.filter((item) => item.rating >= 4.0);
        setItems(favoriteItems);
      })
      .catch((err) => {
        console.error("에러 발생", err);
      });
  }, []);

  return (
    <Container>
      <Title>
        <ViewAll>{my_name}템 전체보기⋰˚★</ViewAll>
        <ViewFav>최애템 모아보기♥=͟͟͞͞ ³ ³</ViewFav>
      </Title>
      <ItemBoxes>
        {items.map((item) => (
          <ItemBox key={item.id}>
            <ItemImg src={item.product_img} alt={item.name} />
            <ItemName>{item.name}</ItemName>
            <ItemBrand>{item.brand}</ItemBrand>
            <ItemPrice>{item.price}원</ItemPrice>
            <ItemRating>⭐{item.rating}</ItemRating>
          </ItemBox>
        ))}
      </ItemBoxes>
    </Container>
  );
};

export default MyItem;
