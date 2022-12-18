import React, { useEffect, useState } from 'react';
import Scoreboard from './Scoreboard';
import Gameboard from './Gameboard';
import card_data from "../cards_data";

function Game(props) {
    let shuffled_cards = card_data.sort(() => Math.random() - 0.5);
    const [currentScore,setcurrentScore] = useState(0);
    const [highScore,sethighScore] = useState(0);
    const [selectedArr,setselectedArr] = useState([]);

    const isUniqueCard = (name) => {
        return selectedArr.includes(name);
    }

    const isHighScore = () => {
        if (currentScore > highScore) {
            sethighScore(currentScore)
        }
    }

    const handleCardClick = (name) => {
        if (!isUniqueCard(name)) {
            setcurrentScore(currentScore + 1)
            setselectedArr([...selectedArr, name]);
        } else {
            setcurrentScore(0);
            setselectedArr([]);
        }
        console.log(selectedArr);
    }


    useEffect(() => {
        shuffled_cards =  card_data.sort(() => Math.random() - 0.5)
    })

    useEffect(isHighScore,[currentScore])

    const resetGame = () => {
        setcardsArr([]);
        setselectedArr([]);

    }

    const nextLevel = () => {
        setLevel(level + 2);
    }

    

  return (
    <div className="container">
        <div id="scoreboard">
            <Scoreboard current_score = {currentScore} highscore = {highScore}/>
        </div>
        <Gameboard shuffled_cards = {shuffled_cards} setcurrentScore = {setcurrentScore}  sethighScore = {sethighScore} setselectedArr = {setselectedArr} handleCardClick = {handleCardClick}/>
        <div id="footer">
            <div></div>
        </div>
    </div>

  )
}

export default Game
