import React from "react";
import "./App.css";

import LionCard1 from "./components/LionCard1";
import LionCard3 from "./components/LionCard3";
import LionCard2 from "./components/LionCard2";

function App() {
  const name = "가짜 아기사자";

  return (
    <>
      <h1>{name}를 찾아라!</h1>
      <LionCard1 />
      <LionCard2 />
      <LionCard3 />
    </>
  );
}

export default App;
