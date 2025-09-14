import { create } from "zustand";

const exerciseData = [
  { id: 1, name: "스쿼트", sets: 1 },
  { id: 2, name: "데드리프트", sets: 1 },
  { id: 3, name: "벤치프레스", sets: 1 },
];

const useExerciseStore = create((set) => ({
  exercise: [...exerciseData],

  addExercise: (name) =>
    set((state) => ({
      exercise: [...state.exercise, { id: Date.now(), name, sets: 1 }],
    })),

  removeExercise: (id) =>
    set((state) => ({
      exercise: state.exercise.filter((exercise) => exercise.id !== id),
    })),

  increaseSets: (id) =>
    set((state) => ({
      exercise: state.exercise.map((exercise) =>
        exercise.id === id ? { ...exercise, sets: exercise.sets + 1 } : exercise
      ),
    })),

  decreaseSets: (id) =>
    set((state) => ({
      exercise: state.exercise.map((exercise) =>
        exercise.id === id ? { ...exercise, sets: exercise.sets - 1 } : exercise
      ),
    })),
}));

export default useExerciseStore;
