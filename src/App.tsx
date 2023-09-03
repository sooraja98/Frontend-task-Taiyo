import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateContact from "./pages/CreateContact";
import EditContact from "./pages/EditContact";
import Home from "./pages/Home";
import ChartAndMap from "./pages/ChartsAndMap";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-contact" element={<CreateContact />} />
          <Route path="/edit-contact/:id" element={<EditContact />} />
          <Route path="/chart" element={<ChartAndMap />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
