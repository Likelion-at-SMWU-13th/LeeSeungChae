import "./App.css";
import { useState } from "react";
import ExerciseRoutine from "./components/ExerciseRoutine";
import useExerciseStore from "./store/store";

function App() {
  const [newExercise, setNewExercise] = useState("");
  const exercise = useExerciseStore((s) => s.exercise);
  const addExercise = useExerciseStore((s) => s.addExercise);

  const handleAddExercise = () => {
    addExercise(newExercise);
    setNewExercise("");
  };

  return (
    <>
      <button onClick={handleAddExercise}>운동 추가</button>
      {exercise.map((ex) => (
        <ExerciseRoutine key={ex.id} exercise={ex} />
      ))}
    </>
  );
}

export default App;
