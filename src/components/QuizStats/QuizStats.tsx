import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import '../../css/QuizStats.css';
import { testLengthAtom } from "../../recoil/atoms/testLengthAtom";
type QuizStatProps = {
    questionNum: number;
    score: number;
    done: boolean;
}

function QuizStats(props: QuizStatProps) {


    const [accuracy, setAccuracy] = useState(0);
    const [testLength, setTestLength] = useRecoilState(testLengthAtom); 
    const done = props.done;
    const score = props.score;
    const questionNum = props.questionNum;

    useEffect(() => {
        let newAccuracy = (score / testLength);

        setAccuracy(Math.round(newAccuracy * 100))
    }, [score]);

    return(
    <>
        {done === true &&
            <div className="correctFeedback">
            GameOver
            </div>
        }
        {/* put this timer here
            https://codesandbox.io/s/2p7no5ol8r?file=/src/index.js
        */}

        <div className="quizStats" id="quizStats">

            <div className="statItem" id="progress">
                {questionNum} / {testLength}
            </div>

            <div className="statItem" id="accuracy">
                {accuracy}%
            </div>

        </div>
    </>
    );
}

export default QuizStats;