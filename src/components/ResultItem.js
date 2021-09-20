import React from "react";


export default function ResultItem({answer}) {
    return (
        <div>
            <h4>{answer.question}</h4>
            <h6>Correct Answer : {answer.correctAnswer}</h6>
            <h6>Submitted Answer : {answer.answer}</h6>
        </div>
    )
}