import React,{useEffect, useState} from "react";

const Scoreboard =  (props) => {

    const {current_score,highscore} = props;


    return(
        <div>
            <div id="current_score">
                <h2>Current Score</h2>
                <h1>{current_score}</h1>
            </div>
            <div id="high_score">
                <h2>High Score</h2>
                <h1>{highscore}</h1>
            </div>
        </div>
    )

}

export default Scoreboard