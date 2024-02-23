import React from "react";
import "./App.css";
import Calculator from "./components/Calculator";
import TestUseMemo from "./components/TestUseMemo";

function App() {
  return (
    <div
      className="d-flex justify-content-center flex-column bg-dark"
      style={{ height: "100vh" }}
    >
      <Calculator />
      <TestUseMemo />
    </div>
  );
}

export default App;
