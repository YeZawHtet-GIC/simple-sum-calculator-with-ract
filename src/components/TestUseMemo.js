import React, { useMemo, useState } from "react";

export default function TestUseMemo() {
  let [numberOne, setNumberOne] = useState(0);
  let [numberTwo, setNumberTwo] = useState(0);
  let changeNumber1 = () => {
    setNumberOne((prevNum) => prevNum + 1);
  };
  let changeNumber2 = () => {
    setNumberTwo((prevNum) => prevNum + 1);
  };

  let isEven = useMemo(() => {
    let i = 0;
    while (i < 500000000) i++;
    return numberOne % 2 === 0;
  }, [numberOne]);
  return (
    <div className="container">
      <h1>TestUseMemo</h1>
      <h3 className="text-warning">
        Number One is : {numberOne} {isEven ? "is Even" : "is Odd"}
      </h3>
      <button className="btn btn-outline-warning" onClick={changeNumber1}>
        Change NumberOne
      </button>
      <h3 className="text-warning">Number Two is : {numberTwo}</h3>
      <button className="btn btn-outline-warning" onClick={changeNumber2}>
        Change NumberTwo
      </button>
    </div>
  );
}
