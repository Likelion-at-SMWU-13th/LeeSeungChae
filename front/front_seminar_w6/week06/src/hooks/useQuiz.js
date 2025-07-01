import { useCallback, useRef, useState } from "react";

export const useQuiz = (questions) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [answers, setAnswers] = useState([]);
  const inputRef = useRef(null);

  const handleSubmit = useCallback(() => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = userAnswer;
    setAnswers(newAnswers);

    // ④-1. 다음 문제로 이동하면서 input에 포커스
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setUserAnswer("");
      setTimeout(() => inputRef.current?.focus(), 0);
    }
  }, [currentQuestion, userAnswer, answers, questions.length]);

  const handleReset = useCallback(() => {
    setCurrentQuestion(0);
    setUserAnswer("");
    setAnswers([]);
    inputRef.current.value = ""; // ④-3. input의 value 초기화
    inputRef.current?.focus(); // ④-2. 초기화 후 input에 포커스
  }, []);

  return {
    currentQuestion,
    userAnswer,
    setUserAnswer,
    answers,
    inputRef,
    handleSubmit,
    handleReset,
  };
};
