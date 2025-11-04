import styled from "styled-components";

export const Title = styled.div`
  margin-top: 5rem;
`;

export const ViewAll = styled.button`
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

export const ViewFav = styled.button`
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

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(236, 233, 210);
  border-radius: 1.25rem;
  min-height: 100vh;
  border: solid 0.125rem rgb(214, 204, 169);
  overflow-x: hidden;
`;

export const ItemBoxes = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 5rem;
  gap: 2rem;
  flex-wrap: wrap;
  min-width: 75rem;
  padding: 0 4.5rem;
`;

export const ItemBox = styled.div`
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
  cursor: pointer;
`;

export const ItemImg = styled.img`
  width: 15.625rem;
  height: 15.625rem;
  border: solid 0.1rem rgb(214, 211, 207);
`;

export const ItemName = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 0.625rem;
  color: rgb(113, 101, 95);
`;

export const ItemBrand = styled.span`
  color: rgba(139, 134, 134, 0.82);
  padding-top: 0.313rem;
`;

export const ItemPrice = styled.p`
  margin-top: 3.125rem;
  color: rgb(202, 161, 161);
  font-weight: bold;
`;
export const ItemRating = styled.p`
  color: rgb(113, 101, 95);
`;
