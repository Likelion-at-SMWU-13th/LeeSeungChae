import useExerciseStore from "../store/store";

function ExerciseRoutine() {
  const myExercise = useExerciseStore((s) => s.myExercise);
  const removeExercise = useExerciseStore((s) => s.removeExercise);
  const increaseSets = useExerciseStore((s) => s.increaseSets);
  const decreaseSets = useExerciseStore((s) => s.decreaseSets);

  return (
    <div>
      {myExercise.map((ex) => (
        <div key={ex.id}>
          <h3>{ex.name}</h3>
          <button onClick={() => increaseSets(ex.id)}>+</button>
          <span>{ex.sets}세트</span>
          <button onClick={() => decreaseSets(ex.id)}>-</button>
          <button onClick={() => removeExercise(ex.id)}>삭제</button>
        </div>
      ))}
    </div>
  );
}

export default ExerciseRoutine;
