import React, { useState } from 'react';
import { evaluate } from 'mathjs';

const Calculator = () => {
  const [input, setInput] = useState(""); 
  const [result, setResult] = useState(""); 

  const handleClick = (value) => {
    if (value === 'DEL') {
      setInput(input.slice(0, -1)); 
    } else if (value === 'RESET') {
      setInput(""); 
        } else if (value === 'AC') {
      setResult(""); 
      setInput(""); 
    } else if (value === '=') {
      calculateresult();
    } else {
      setInput(input + value); 
    }
  }

  const calculateresult = () => {
    try {
      setResult(evaluate(input));
    } catch (error) {
      setResult("Error");
    }
  }

  return (
    <div style={{ textAlign: "center", marginTop: '50px' }}>
     
      <div style={{
        display: 'grid',
        flexDirection: "column",
        height: "80vh",
        width: "50vh",
        border: "1px solid #ccc",
        background: "#f9f9f9",
        backgroundColor: "grey" 
      }}>
         <h1>Calculator</h1>
        <input  style={{ backgroundColor : 'blue'}}value={input} readOnly placeholder="Input" />
        <input   style={{ backgroundColor : 'blue'}} value={result} readOnly placeholder="Result" />
        <div style={{
          display: "flex",
        }}>
          <button onClick={() => handleClick(7)}>7</button>
          <button onClick={() => handleClick(8)}>8</button>
          <button onClick={() => handleClick(9)}>9</button>
          <button onClick={() => handleClick('/')}>/</button>
        </div>
        <div style={{
          display: "flex"}}>
          <button onClick={() => handleClick(4)}>4</button>
          <button onClick={() => handleClick(5)}>5</button>
          <button onClick={() => handleClick(6)}>6</button>
          <button onClick={() => handleClick('*')}>*</button>
        </div>
        <div style={{
          display: "flex", 
        }}>
          <button onClick={() => handleClick(1)}>1</button>
          <button onClick={() => handleClick(2)}>2</button>
          <button onClick={() => handleClick(3)}>3</button>
          <button onClick={() => handleClick('-')}>-</button>
        </div>
        <div style={{
          display: "flex",
        }}>
          <button onClick={() => handleClick(0)}>0</button>
          <button onClick={() => handleClick('.')}>.</button>
          <button onClick={() => handleClick('=')}>=</button>
          <button onClick={() => handleClick('+')}>+</button>
        </div>
        <div style={{
          display: "flex", 
        }}>
          <button onClick={() => handleClick('DEL')}>DEL</button>
          <button onClick={() => handleClick('RESET')}>RESET</button>
          <button onClick={() => handleClick('AC')}>AC</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;