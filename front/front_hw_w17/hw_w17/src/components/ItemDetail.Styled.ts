import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1920px;
  height: 100vh;
  background-color: rgb(235, 223, 223);
`;

export const DetailBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`;

export const Container = styled.div`
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

export const GoBackBtn = styled.button`
  justify-content: left;
  width: 130px;
  height: 50px;
  margin: 10px 10px;
  border-radius: 50px;
  color: rgb(209, 184, 184);
  background-color: white;
  border: 2px solid rgb(209, 184, 184);
`;

export const ItemName = styled.h2`
  color: white;
`;

export const Behind = styled.p`
  color: white;
`;
export const AddCmtBtn = styled.button`
  border-radius: 0 10px 10px 0;
  width: 100px;
  color: white;
  background-color: rgb(197, 157, 157);
  border: 1.5px solid white;
`;

export const AddComment = styled.div`
  display: flex;
  justify-content: center;
`;

export const AddCommentBox = styled.input`
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

export const ViewAllCmt = styled.div``;

export const ViewAllCmtTitle = styled.h3``;
