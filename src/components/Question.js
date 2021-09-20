import { React, useState } from "react";

export default function Question({ num1, num2, operator, handleNextQuestion }) {
  const [answer, setAnswer] = useState("");

  const evaluateCorrectAnswer = () => {
    switch (operator) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        return num1 / num2;
      default:
        return -1;
    }
  };

  const handleAnswer = () => {
    handleNextQuestion(parseInt(answer, 10), evaluateCorrectAnswer(), num1+operator+num2);
    setAnswer("");
  };

  const handleInputChange = (e) => {
    setAnswer(e.target.value);
  };

  return (
    <>
      <div>
        {num1} {operator} {num2}
      </div>
      <input type="number" value={answer} onChange={handleInputChange} />
      <button onClick={handleAnswer}>Next</button>
    </>
  );
}
