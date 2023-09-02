import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateContact from "./pages/CreateContact";
import EditContact from "./pages/EditContact";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/create-contact" element={<CreateContact />} />
          <Route path="/edit-contact" element={<EditContact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
