import useExerciseStore from "../store/store";

function ExerciseList() {
  const allExercise = useExerciseStore((s) => s.allExercise);
  const addExercise = useExerciseStore((s) => s.addExercise);

  return (
    <div>
      {allExercise.map((ex) => (
        <div key={ex.id}>
          <h3>{ex.name}</h3>
          <button onClick={() => addExercise(ex)}>추가</button>
        </div>
      ))}
    </div>
  );
}

export default ExerciseList;
