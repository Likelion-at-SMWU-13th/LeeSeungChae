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

const ExerciseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0.8;
`;

const ExerciseBox = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid lightgray;
  justify-content: space-between;
  width: 20rem;
  padding-left: 1rem;
`;

const ExerciseName = styled.div`
  font-size: 1.2rem;
  color: gray;
`;

const AddBtn = styled.button`
  width: 5rem;
  color: white;
  cursor: pointer;
  background-color: #b2b7b4ff;
  border: none;
`;

function ExerciseList() {
  const allExercise = useExerciseStore((s) => s.allExercise);
  const addExercise = useExerciseStore((s) => s.addExercise);

  return (
    <Container>
      <Title>전체 운동 목록</Title>
      <ExerciseContainer>
        {allExercise.map((ex) => (
          <ExerciseBox key={ex.id}>
            <ExerciseName>{ex.name}</ExerciseName>
            <AddBtn onClick={() => addExercise(ex)}>추가</AddBtn>
          </ExerciseBox>
        ))}
      </ExerciseContainer>
    </Container>
  );
}

export default ExerciseList;
