import React from "react";
import ColorQuiz from "../components/ColorQuiz/ColorQuiz";
import { useRecoilState } from "recoil";
import { testLengthAtom } from "../recoil/atoms/testLengthAtom";

function Quiz() {

    const [testLength, setTestLength] = useRecoilState(testLengthAtom);
    return(
        <ColorQuiz testLength={testLength}></ColorQuiz>
    );
}


export default Quiz;