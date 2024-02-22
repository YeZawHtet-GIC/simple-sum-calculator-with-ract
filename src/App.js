import { useState } from "react";
import "./App.css";

function App() {
  const [numberOne, setNumberOne] = useState("");
  const [numberTwo, setNumberTwo] = useState("");
  const [add, setAdd] = useState("");

  const calculate = () => {
    //!checking provide number
    if (numberOne === "" || numberTwo === "") {
      alert("Please enter numbers to calculate!");
      return;
    }

    const result = parseInt(numberOne) + parseInt(numberTwo);
    setAdd(result);
  };
  //!preventing input string characters
  const handleNumberChange = (setValue, value) => {
    const regex = /^[0-9\b]+$/; // Regular expression to match numbers
    if (value === "" || regex.test(value)) {
      setValue(value);
    }
  };

  return (
    <div
      className="d-flex justify-content-center flex-column bg-dark"
      style={{ height: "100vh" }}
    >
      <div className="bg-dark col-md-6 offset-3 rounded shadow">
        <h3 className="text-center text-warning py-3">Sum Calculator</h3>
        <div className="col-md-6 offset-3 bg-dark rounded">
          <label htmlFor="NumberOne" className="text-warning form-label">
            Number One :
          </label>
          <input
            type="text"
            value={numberOne}
            onChange={(e) => handleNumberChange(setNumberOne, e.target.value)}
            className="form-control mb-3"
            placeholder="Enter Number 1"
          />
          <label htmlFor="NumberTwo" className="text-warning form-label">
            Number Two :
          </label>
          <input
            type="text"
            value={numberTwo}
            onChange={(e) => handleNumberChange(setNumberTwo, e.target.value)}
            className="form-control mb-3"
            placeholder="Enter Number 2"
          />
          <button type="submit" onClick={calculate} className="btn btn-outline-primary px-3">
            Sum
          </button>
        </div>
        <h3 className="text-warning col-md-6 offset-3 py-3">
          Sum Result is : {add}
        </h3>
      </div>
    </div>
  );
}

export default App;
