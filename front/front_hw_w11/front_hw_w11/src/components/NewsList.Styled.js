import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 20px;
  margin: 30px;
  justify-content: center;
  border-radius: 10px;
  flex-direction: row;
`;

export const Card = styled.div`
  background-color: white !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  width: 500px;
  height: 700px;
  margin: 30px;
  box-shadow: 3px 12px 25px rgba(11, 10, 10, 0.15);
  opacity: 0.95;
`;

export const Title = styled.h3`
  padding: 10px;
  color: #4f4f4f;
  font-size: 24px;
  font-weight: bold;
`;

export const Img = styled.img`
  width: 500px;
  height: 250px;
`;

export const Desc = styled.p`
  padding: 10px;
  font-family: "GowunBatang-Regular";
  font-size: 18px;
  color: #666666;
`;

export const Date = styled.span`
  padding: 10px;
  font-family: "GowunBatang-Regular";
  color: lightgrey;
`;
