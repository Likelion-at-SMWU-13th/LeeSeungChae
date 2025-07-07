import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Title = styled.div`
  margin-top: 5rem;
`;

const ViewAll = styled.button`
  font-size: 1.25rem;
  color: rgb(214, 204, 169);
  font-weight: bold;
  background-color: rgb(246, 246, 244);
  cursor: pointer;
  border-radius: 3.125rem;
  text-align: center;
  border: solid 0.125rem rgb(214, 204, 169);
  padding: 0.938rem;
  margin: 0.625rem;
  &:hover {
    opacity: 0.8;
    scale: 1.05;
  }
`;

const ViewFav = styled.button`
  font-size: 1.25rem;
  color: rgb(214, 204, 169);
  font-weight: bold;
  background-color: rgb(246, 246, 244);
  cursor: pointer;
  border-radius: 3.125rem;
  text-align: center;
  border: solid 0.125rem rgb(214, 204, 169);
  padding: 0.938rem;
  margin: 0.625rem;
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
  border-radius: 1.25rem;
  min-height: 100vh;
  border: solid 0.125rem rgb(214, 204, 169);
`;

const ItemBoxes = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 5rem;
  flex-wrap: wrap;
`;

const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 0.938rem;
  padding: 1.25rem;
  margin: 2.5rem;
  background-color: rgb(231, 231, 216);
  box-shadow: 0 0.125rem 1rem rgb(122, 120, 120);
  &:hover {
    opacity: 0.8;
    scale: 1.05;
  }
`;

const ItemImg = styled.img`
  width: 15.625rem;
  height: 15.625rem;
  border: solid 0.1rem rgb(214, 211, 207);
`;

const ItemName = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 0.625rem;
  color: rgb(113, 101, 95);
`;

const ItemBrand = styled.span`
  color: rgba(139, 134, 134, 0.82);
  padding-top: 0.313rem;
`;

const ItemPrice = styled.p`
  margin-top: 3.125rem;
  color: rgb(202, 161, 161);
  font-weight: bold;
`;
const ItemRating = styled.p`
  color: rgb(113, 101, 95);
`;

const MyItem = ({ my_name }) => {
  const [items, setItems] = useState([]);
  const [showFavoriteItems, setShowFavoriteItems] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/my_items")
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => {
        console.error("에러 발생", err);
      });
  }, []);

  const favoriteItems = showFavoriteItems
    ? items.filter((item) => item.rating >= 4.0)
    : items;

  return (
    <Container>
      <Title>
        <ViewAll onClick={() => setShowFavoriteItems(false)}>
          {my_name}템 전체보기⋰˚★
        </ViewAll>
        <ViewFav onClick={() => setShowFavoriteItems(true)}>
          최애템 모아보기♥=͟͟͞͞ ³ ³
        </ViewFav>
      </Title>
      <ItemBoxes>
        {favoriteItems.map((item) => (
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
