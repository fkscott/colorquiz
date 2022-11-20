import React, { useState } from "react";
import { Link } from "react-router-dom";
import NumberInput from "../components/NumberInput/NumberInput";

function Home() {

    return(
        <div className="App">
            <h1>Welcome to the color quiz!</h1>

            <p className="mediumText">choose a number of questions to answer, and you'll be asked to choose the hex value for each color shown</p>
            <div className="startMenu">

                <NumberInput label={"testLength"}></NumberInput>
                
                <Link className="button goButton" to="quiz">
                    start the quiz!
                </Link>

            </div>
        </div>
    );
}


export default Home;