import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const DetailBox = styled.div``;

const Container = styled.div``;

const GoBackBtn = styled.button``;

const ItemName = styled.h3``;

const Behind = styled.p``;
const AddCmtBtn = styled.button``;

const AddComment = styled.div``;

const AddCommentBox = styled.input``;

const ViewAllCmt = styled.div``;

const ViewAllCmtTitle = styled.h3``;

const ItemDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/my_items?id=${id}`)
      .then((res) => {
        setItem(res.data[0]);
      })
      .catch((err) => {
        console.error("에러 발생", err);
      });
  }, [id]);

  const goBack = () => {
    navigate(-1);
  };

  const addComment = () => {
    console.log("등록 클릭");
    if (comment !== "") {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  if (!item) return <div>로딩 중...</div>;

  return (
    <Container>
      <GoBackBtn onClick={goBack}>뒤로 가기</GoBackBtn>
      <DetailBox>
        <ItemName>{item.name}</ItemName>
        <Behind>비하인드:{item.story}</Behind>
      </DetailBox>
      <AddComment>
        <AddCommentBox
          type="text"
          placeholder="승채템 사용 후기를 남겨주세요!"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></AddCommentBox>
        <AddCmtBtn onClick={addComment}>등록</AddCmtBtn>
      </AddComment>
      <ViewAllCmt>
        <ViewAllCmtTitle>댓글 모아보기</ViewAllCmtTitle>
        {comments.map((cmt, num) => {
          console.log(comments);
          return <div key={num}>{cmt}</div>;
        })}
      </ViewAllCmt>
    </Container>
  );
};

export default ItemDetail;
