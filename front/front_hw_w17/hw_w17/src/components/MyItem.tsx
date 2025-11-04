import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as S from "./MyItem.Styled";

interface Item {
  id: number;
  name: string;
  brand: string;
  price: number;
  rating: number;
  product_img: string;
}

interface MyItemProps {
  my_name: string;
}

const MyItem: React.FC<MyItemProps> = ({ my_name }) => {
  const [items, setItems] = useState<Item[]>([]);
  const [showFavoriteItems, setShowFavoriteItems] = useState<boolean>(false);
  const navigate = useNavigate();

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

  const seeDetail = (id: Item["id"]) => {
    navigate(`/item/${id}`);
  };

  return (
    <S.Container>
      <S.Title>
        <S.ViewAll onClick={() => setShowFavoriteItems(false)}>
          {my_name}템 전체보기⋰˚★
        </S.ViewAll>
        <S.ViewFav onClick={() => setShowFavoriteItems(true)}>
          최애템 모아보기♥=͟͟͞͞ ³ ³
        </S.ViewFav>
      </S.Title>
      <S.ItemBoxes>
        {favoriteItems.map((item) => (
          <S.ItemBox key={item.id} onClick={() => seeDetail(item.id)}>
            <S.ItemImg src={item.product_img} alt={item.name} />
            <S.ItemName>{item.name}</S.ItemName>
            <S.ItemBrand>{item.brand}</S.ItemBrand>
            <S.ItemPrice>{item.price}원</S.ItemPrice>
            <S.ItemRating>⭐{item.rating}</S.ItemRating>
          </S.ItemBox>
        ))}
      </S.ItemBoxes>
    </S.Container>
  );
};

export default MyItem;
