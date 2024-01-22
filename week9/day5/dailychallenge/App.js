import React, { useState } from 'react';

function App() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [operation, setOperation] = useState('add');
  const [result, setResult] = useState(null);

  const handleNumberChange = (e, number) => {
    const value = e.target.value;
    if (number === 1) {
      setNumber1(value);
    } else {
      setNumber2(value);
    }
  };

  const handleOperationChange = (e) => {
    setOperation(e.target.value);
  };

  const handleCalculate = () => {
    let resultValue;
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);

    switch (operation) {
      case 'add':
        resultValue = num1 + num2;
        break;
      case 'subtract':
        resultValue = num1 - num2;
        break;
      case 'multiply':
        resultValue = num1 * num2;
        break;
      case 'divide':
        resultValue = num1 / num2;
        break;
      default:
        resultValue = null;
    }

    setResult(resultValue);
  };

  return (
    <div className="App">
      <h1>React Calculator</h1>
      <div>
        <label>
          Number 1:
          <input type="number" value={number1} onChange={(e) => handleNumberChange(e, 1)} />
        </label>
      </div>
      <div>
        <label>
          Number 2:
          <input type="number" value={number2} onChange={(e) => handleNumberChange(e, 2)} />
        </label>
      </div>
      <div>
        <label>
          Operation:
          <select value={operation} onChange={handleOperationChange}>
            <option value="add">Addition</option>
            <option value="subtract">Subtraction</option>
            <option value="multiply">Multiplication</option>
            <option value="divide">Division</option>
          </select>
        </label>
      </div>
      <button onClick={handleCalculate}>Add Them</button>
      {result !== null && <p>Result: {result}</p>}
    </div>
  );
}

export default App;
