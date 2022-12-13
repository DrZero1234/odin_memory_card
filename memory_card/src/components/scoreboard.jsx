import React,{useEffect, useState} from "react";

const Scoreboard =  () => {
    const [currentScore,setcurrentScore] = useState(0);
    const [highScore,sethighScore] = useState(0);


    useEffect(() => {
        isHighScore()
    },[currentScore])

    const isHighScore = () => {
        if (currentScore > highScore) {
            sethighScore(currentScore);
        }
    }

    return(
        <div id="scoreboard">
            <div id="current_score">
                <h2>Current Score</h2>
                <h1>{currentScore}</h1>
            </div>
            <div id="high_score">
                <h2>High Score</h2>
                <h1>{highScore}</h1>
            </div>
            <button id="increase" onClick={() => setcurrentScore(currentScore+1)} >Increase</button>
            <button id="reset" onClick={() => setcurrentScore(0)}>Reset</button>
        </div>
    )

}

export default Scoreboard