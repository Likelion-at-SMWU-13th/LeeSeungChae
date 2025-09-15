import { create } from "zustand";
import { devtools } from "zustand/middleware";

const exerciseData = [
  { id: 1, name: "스쿼트", sets: 1 },
  { id: 2, name: "데드리프트", sets: 1 },
  { id: 3, name: "벤치프레스", sets: 1 },
];

const useExerciseStore = create(
  devtools((set) => ({
    allExercise: [...exerciseData],
    myExercise: [],

    addExercise: (exercise) =>
      set((state) => ({
        myExercise: [...state.myExercise, { ...exercise, sets: 1 }],
      })),

    removeExercise: (id) =>
      set((state) => ({
        myExercise: state.myExercise.filter((exercise) => exercise.id !== id),
      })),

    increaseSets: (id) =>
      set((state) => ({
        myExercise: state.myExercise.map((exercise) =>
          exercise.id === id
            ? { ...exercise, sets: exercise.sets + 1 }
            : exercise
        ),
      })),

    decreaseSets: (id) =>
      set((state) => ({
        myExercise: state.myExercise.map((exercise) =>
          exercise.id === id
            ? { ...exercise, sets: exercise.sets - 1 }
            : exercise
        ),
      })),
  }))
);

export default useExerciseStore;
