import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ItemDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/my_items/${id}`)
      .then((res) => {
        setItem(res.data);
      })
      .catch((err) => {
        console.error("에러 발생", err);
      });
  }, [id]);

  const goBack = () => {
    navigate(-1);
  };

  if (!item) {
    return <div>불러오는중..</div>;
  }

  return (
    <div>
      <button onClick={goBack}>뒤로 가기</button>
      <div>
        <h3>{item.name}</h3>
        <img src={item.product_img} />
        <p>{item.brand}</p>
        <p>{item.price}</p>
        <p>{item.rating}</p>
        <p>비하인드:{item.story}</p>
      </div>
      <div>
        <input type="text" placeholder="승채템 사용 후기를 남겨주세요!"></input>
        <button>등록</button>
      </div>
      <div>
        <p>댓글 모아보기</p>
      </div>
      <div></div>
    </div>
  );
};

export default ItemDetail;
