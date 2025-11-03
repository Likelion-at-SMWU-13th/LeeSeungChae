import { useState, useEffect } from "react";
import type { ChangeEvent } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

interface Item {
  id: number;
  name: string;
  story: string;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1920px;
  height: 100vh;
  background-color: rgb(235, 223, 223);
`;

const DetailBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 500px;
  border-radius: 30px;
  padding: 30px;
  background-color: rgb(207, 199, 199);
  opacity: 80%;
  box-shadow: 0 0.125rem 1rem rgb(148, 142, 135);
`;

const GoBackBtn = styled.button`
  justify-content: left;
  width: 130px;
  height: 50px;
  margin: 10px 10px;
  border-radius: 50px;
  color: rgb(209, 184, 184);
  background-color: white;
  border: 2px solid rgb(209, 184, 184);
`;

const ItemName = styled.h2`
  color: white;
`;

const Behind = styled.p`
  color: white;
`;
const AddCmtBtn = styled.button`
  border-radius: 0 10px 10px 0;
  width: 100px;
  color: white;
  background-color: rgb(197, 157, 157);
  border: 1.5px solid white;
`;

const AddComment = styled.div`
  display: flex;
  justify-content: center;
`;

const AddCommentBox = styled.input`
  border: none;
  width: 400px;
  height: 50px;
  background-color: rgb(205, 187, 187);
  border: 1px solid white;
  border-radius: 10px 0 0 10px;

  ::placeholder {
    color: white;
  }
`;

const ViewAllCmt = styled.div``;

const ViewAllCmtTitle = styled.h3``;

const ItemDetail: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();

  const [item, setItem] = useState<Item | null>(null);
  const [comment, setComment] = useState<string>("");
  const [comments, setComments] = useState<string[]>([]);

  useEffect(() => {
    if (!id) return;
    axios
      .get<Item>(`http://localhost:8000/my_items/${id}`)
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

  const addComment = () => {
    console.log("등록 클릭");
    if (comment.trim() !== "") {
      setComments((prev) => [...prev, comment.trim()]);
      setComment("");
    }
  };

  if (!item) return <div>로딩 중...</div>;

  return (
    <Wrapper>
      <Container>
        <GoBackBtn onClick={goBack}>뒤로 가기</GoBackBtn>
        <DetailBox>
          <ItemName>{item.name}</ItemName>
          <Behind>{item.story}</Behind>
        </DetailBox>
        <AddComment>
          <AddCommentBox
            type="text"
            placeholder="승채템 사용 후기를 남겨주세요!"
            value={comment}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setComment(e.target.value)
            }
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
              e.key === "Enter" && addComment()
            }
          ></AddCommentBox>
          <AddCmtBtn onClick={addComment}>등록</AddCmtBtn>
        </AddComment>
        <ViewAllCmt>
          <ViewAllCmtTitle>🗯️ 댓글 모아보기</ViewAllCmtTitle>
          {comments.map((cmt, num) => {
            console.log(comments);
            return <div key={num}>{cmt}</div>;
          })}
        </ViewAllCmt>
      </Container>
    </Wrapper>
  );
};

export default ItemDetail;
