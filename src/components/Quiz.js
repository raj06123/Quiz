import { React, useState, useEffect } from "react";

import Question from "./Question";
import Result from "./../pages/Result";

export default function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const generateRandomDigit = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const generateQuiz = () => {
    let questionList = [];
    for (let i = 0; i < 10; i++) {
      let num1 = generateRandomDigit(0, 9);
      let num2 = generateRandomDigit(0, 9);
      let operator = generateOperator();

      if (operator === "/" && num2 === 0) {
        while (num2 === 0) {
          num2 = generateRandomDigit(0, 9);
        }
      }

      questionList.push({
        num1,
        num2,
        operator
      });
    }

    setQuestions([...questions, ...questionList]);
  };

  useEffect(() => {
    generateQuiz();
  }, []);

  

  const handleNextQuestion = (answer, correctAnswer, question) => {
    if (answer === correctAnswer) {
      setScore((score) => score + 1);
    }

    setAnswers([...answers, {correctAnswer,answer,question}]);

    if(questionNumber == 9) {
      setShowResult(true);
    } else {
      setQuestionNumber((questionNumber) => questionNumber + 1);
    }

  };

  const generateOperator = () => {
    const operators = ["+", "-", "*", "/"];
    const operatorIndex = generateRandomDigit(0, 4);
    return operators[operatorIndex];
  };
  console.log(score);
  return (
    <div>
      {questions.length > 0 && !showResult ? (
        <>
        <Question
          num1={questions[questionNumber].num1}
          num2={questions[questionNumber].num2}
          operator={questions[questionNumber].operator}
          handleNextQuestion={handleNextQuestion}
        />
        <div>Score : {score}</div>
        </>
      ) : null}
      {showResult && <Result answers={answers} score = {score}/>}
    </div>
  );
}
