import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import QuizPage from "./pages/QuizPage";
import ResultPage from "./pages/ResultPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="quiz/:quizId" element={<QuizPage />} />
        <Route path="result" element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
