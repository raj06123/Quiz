import React from "react";
import ResultItem from "../components/ResultItem";


export default function Result({answers, score}) {

    console.log(answers);

    return (
        <div>
            <h3>Score : {score}</h3>
            <div>
                {answers.length > 0 ? answers.map((answer) => {
                    return (<ResultItem answer={answer}/>)
                }):null}    
            </div>
        </div>
    )
}