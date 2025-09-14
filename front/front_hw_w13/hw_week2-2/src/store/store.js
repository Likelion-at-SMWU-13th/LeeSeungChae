import { create } from "zustand";

const useExerciseStore = create(() => ({
  exercise: [],
  addExercise: () => {},
  removeExercise: () => {},
  chooseSet: () => {},
}));

export default useExerciseStore;
