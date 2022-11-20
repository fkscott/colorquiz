import React, {useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { setSourceMapRange } from 'typescript';
import QuizStats from '../QuizStats/QuizStats';
import './ColorQuiz.css';

function generateRandomHexColor() {
    var hexBase ='0123456789abcdef'
    var color = '#';
  
    for(var i = 0; i < 6; i++) {
      color += hexBase[Math.floor(Math.random() * hexBase.length)];
    }
  
    return color;
}

//this is probably bad find a different way to do this shit
//sleep(2000)
const sleep = (ms:number) => new Promise(res => setTimeout(res, ms));

  
enum Result {
    Correct,
    Wrong
}

type ColorQuizProps = {
    testLength: number;
    debug?: boolean;
}


  function ColorQuiz(props: ColorQuizProps) {

  
  
    const [displayColor, setDisplayColor] = useState<string>("");
    const [answers, setAnswers] = useState<string[]>([]);
    const [result, setResult] = useState<Result | undefined>(undefined);
    const [firstTry, setFirstTry] = useState<boolean>(true);
    const [disableButtons, setDisableButtons] = useState<boolean>(false);
    const [score, setScore] = useState<number>(0);
    const [done, setDone] = useState<boolean>(false);
    const [questionNum, setQuestionNum] = useState<number>(1);
    function resetQuiz() {
        setScore(0);
        setResult(undefined);
        setFirstTry(true);
        setDone(false);
        setDisableButtons(false);
        setQuestionNum(1);
        pickColor();
      }
  
    function pickColor() {
      //generate random color
      const actualColor = generateRandomHexColor();
      setDisplayColor(actualColor);
      setAnswers([actualColor, generateRandomHexColor(), generateRandomHexColor()].sort(()=> 0.5 - Math.random()));
      setFirstTry(true);
    } 
  
    function updateScore() {
        if(firstTry) { 
          console.log('firstTry');
          setScore(score+1);
        }
        if(questionNum + 1 > props.testLength) {
          setDone(true);
          setDisableButtons(true);
          return;
        }
  
        else {
          setQuestionNum(questionNum+1);
        }
    }
    


    const handleAnswerClicked:(e: React.MouseEvent<HTMLButtonElement>) => void =  (e) => {
      if(e.currentTarget.value === displayColor) {
        ///generate more colors
        setResult(Result.Correct);
        updateScore();
        pickColor();

      }
      else {
        setResult(Result.Wrong);
        e.currentTarget.disabled = true;
        setFirstTry(false);
      }
    }
  
    useEffect(() => {
      pickColor();
    }, []);
  
    return(
      <div className="App" >
        <QuizStats questionNum={questionNum} score={score} done={done} />

        {result === Result.Wrong &&
          <div className="incorrectFeedback">
            Wrong Answer!
          </div>
        }
  
        {result === Result.Correct &&
          <div className="correctFeedback">
            Correct!
          </div>
        }
  
        <div className="displayColor" style={{background: displayColor}}/>
  
        <div className="answerButtons">
        {answers.map((answer) => (
          <button className=" button answerButton" disabled={disableButtons} onClick={handleAnswerClicked} key={answer} value={answer}>{answer}</button>
        ))}
        </div>
  


        <div className="optionsButtons">

          <button onClick={() => resetQuiz() } className="button resetButton">
            Reset Game
          </button>

          <Link className="button goButton" to="/">
              Return Home
          </Link>
        </div>
  
      </div>
    );
  }
  
  export default ColorQuiz;
  