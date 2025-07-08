import React from "react";
import "./App.css";
import MyItem from "./components/MyItem";
import ItemDetail from "./components/ItemDetail";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyItem my_name={"승채"} />} />
        <Route path="/item/:id" element={<ItemDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
