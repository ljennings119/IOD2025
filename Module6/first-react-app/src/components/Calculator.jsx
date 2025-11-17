import { useState } from "react";

export default function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState("");

  function calculate() {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    let answer;

    switch (operator) {
      case "+":
        answer = n1 + n2;
        break;
      case "-":
        answer = n1 - n2;
        break;
      case "*":
        answer = n1 * n2;
        break;
      case "/":
        answer = n1 / n2;
        break;
      default:
        answer = "Error";
    }

    setResult(answer);
  }

  return (
    <div className="componentBox" style={{ padding: "20px" }}>
      <h2>Calculator</h2>

      <div>
        <label>Number 1: </label>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
      </div>

      <div>
        <label>Operator: </label>
        <select
          value={operator}
          onChange={(e) => setOperator(e.target.value)}
        >
          <option value="+">+</option>
          <option value="-">−</option>
          <option value="*">×</option>
          <option value="/">÷</option>
        </select>
      </div>

      <div>
        <label>Number 2: </label>
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
      </div>

      <button onClick={calculate}>Calculate</button>

      {result !== "" && (
        <h3 style={{ marginTop: "15px" }}>
          Result: {result}
        </h3>
      )}
    </div>
  );
}
