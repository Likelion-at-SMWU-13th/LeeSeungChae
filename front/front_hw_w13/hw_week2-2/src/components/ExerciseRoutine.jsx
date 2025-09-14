import useExerciseStore from "../store/store";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: gray;
`;

const ExerciseBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 35rem;
  padding-left: 1rem;
  padding: 1rem;
  border-top: 1px solid #ebe7e7ff;
  border-bottom: 1px solid #ebe7e7ff;
`;

const ExerciseName = styled.div`
  font-size: 1rem;
  color: gray;
  width: 10rem;
`;

const IncreaseBtn = styled.button`
  width: 2rem;
  color: white;
  background-color: #dededeff;
  decoration: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const DecreaseBtn = styled.button`
  width: 2rem;
  color: white;
  background-color: #dededeff;
  decoration: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const DeleteBtn = styled.button`
  width: 5rem;
  color: white;
  background-color: #e1c1c1ff;
  decoration: none;
  border: none;
  cursor: pointer;
`;

function ExerciseRoutine() {
  const myExercise = useExerciseStore((s) => s.myExercise);
  const removeExercise = useExerciseStore((s) => s.removeExercise);
  const increaseSets = useExerciseStore((s) => s.increaseSets);
  const decreaseSets = useExerciseStore((s) => s.decreaseSets);

  return (
    <Container>
      <Title>내 운동 루틴</Title>
      {myExercise.map((ex) => (
        <ExerciseBox key={ex.id}>
          <ExerciseName>{ex.name}</ExerciseName>
          <DecreaseBtn onClick={() => decreaseSets(ex.id)}>-</DecreaseBtn>
          <span>{ex.sets}세트</span>
          <IncreaseBtn onClick={() => increaseSets(ex.id)}>+</IncreaseBtn>
          <DeleteBtn onClick={() => removeExercise(ex.id)}>삭제</DeleteBtn>
        </ExerciseBox>
      ))}
    </Container>
  );
}

export default ExerciseRoutine;
