import { useState, useEffect } from "react";
import type { ChangeEvent } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import * as S from "./ItemDetail.Styled";

interface Item {
  id: number;
  name: string;
  story: string;
}

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
    <S.Wrapper>
      <S.Container>
        <S.GoBackBtn onClick={goBack}>뒤로 가기</S.GoBackBtn>
        <S.DetailBox>
          <S.ItemName>{item.name}</S.ItemName>
          <S.Behind>{item.story}</S.Behind>
        </S.DetailBox>
        <S.AddComment>
          <S.AddCommentBox
            type="text"
            placeholder="승채템 사용 후기를 남겨주세요!"
            value={comment}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setComment(e.target.value)
            }
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
              e.key === "Enter" && addComment()
            }
          ></S.AddCommentBox>
          <S.AddCmtBtn onClick={addComment}>등록</S.AddCmtBtn>
        </S.AddComment>
        <S.ViewAllCmt>
          <S.ViewAllCmtTitle>🗯️ 댓글 모아보기</S.ViewAllCmtTitle>
          {comments.map((cmt, num) => {
            console.log(comments);
            return <div key={num}>{cmt}</div>;
          })}
        </S.ViewAllCmt>
      </S.Container>
    </S.Wrapper>
  );
};

export default ItemDetail;
