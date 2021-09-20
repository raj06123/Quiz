import React,{useState} from "react";
import Quiz from "../components/Quiz";
 
export default function Index() {

    const [startQuiz1,setStartQuiz1] = useState(false);
    const [startQuiz2,setStartQuiz2] = useState(false);

    const handleQuiz1 = () => {
        setStartQuiz1(true);
    }

    const handleQuiz2 = () => {
        setStartQuiz2(true);
    }

    return (
           <> 
            <div/>
                {!(startQuiz1) && <button onClick={handleQuiz1}>Start Quiz</button>}
            {startQuiz1 && <Quiz />}
            <div> startQuiz1</div>
        
        <div>
                {!startQuiz2 && <button onClick={handleQuiz2}>Start Quiz</button>}
                {startQuiz2 && <Quiz />}
            </div>
            


            <div className='StartQuiz1' color='primary'></div>
        </>
        )
        }