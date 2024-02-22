import { useState } from "react";
import "./App.css";

function App() {
  const [numberOne, setNumberOne] = useState("");
  const [numberTwo, setNumberTwo] = useState("");
  const [add, setAdd] = useState("");

  const calculate = (event) => {
    event.preventDefault();
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
    <div className="bg-dark col-md-6 offset-3 rounded">
      <h3 className="text-center text-warning pt-4">Adding Two Number</h3>
      <div className="d-flex justify-content-center align-items-center mt-5">
        <form onSubmit={calculate} className=" p-2 bg-dark rounded">
          <label htmlFor="NumberOne">Number One</label>
          <input
            type="text"
            value={numberOne}
            onChange={(e) => handleNumberChange(setNumberOne, e.target.value)}
            className="form-control mb-3"
            placeholder="Enter Number 1"
          />
          <label htmlFor="NumberTwo">Number Two</label>
          <input
            type="text"
            value={numberTwo}
            onChange={(e) => handleNumberChange(setNumberTwo, e.target.value)}
            className="form-control mb-3"
            placeholder="Enter Number 2"
          />
          <button type="submit" className="btn btn-primary">
            Sum
          </button>
        </form>
      </div>
      <h3 className="text-center text-warning py-3">Sum Result is : {add}</h3>
    </div>
  );
}

export default App;
