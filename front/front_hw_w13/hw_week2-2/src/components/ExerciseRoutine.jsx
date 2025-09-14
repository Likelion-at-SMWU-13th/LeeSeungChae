import useExerciseStore from "../store/store";

function ExerciseRoutine({ exercise }) {
  const removeExercise = useExerciseStore((s) => s.removeExercise);
  const increaseSets = useExerciseStore((s) => s.increaseSets);
  const decreaseSets = useExerciseStore((s) => s.decreaseSets);

  return (
    <div>
      <h3>{exercise.name}</h3>
      <button onClick={() => increaseSets(exercise.id)}>+</button>
      <span>{exercise.sets}세트</span>
      <button onClick={() => decreaseSets(exercise.id)}>-</button>
      <button onClick={() => removeExercise(exercise.id)}>삭제</button>
    </div>
  );
}

export default ExerciseRoutine;
