import React, { useEffect, useState } from 'react';
import Scoreboard from './Scoreboard';
import Gameboard from './Gameboard';
import card_data from "../cards_data";

function Game(props) {
    let shuffled_cards = card_data.sort(() => Math.random() - 0.5);
    const [currentScore,setcurrentScore] = useState(0);
    const [highScore,sethighScore] = useState(0);

    const isUniqueCard = (name) => {
        return selectedArr.includes(name);
    }


    useEffect(() => {
        shuffled_cards =  card_data.sort(() => Math.random() - 0.5)
    })

    const handleAddingCard = (name) => {
        if (isUniqueCard(name)) {
            setcardArr(([...cardArr,name]))
        }
        else {
            // TODO
        }
    }

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
        <Gameboard shuffled_cards = {shuffled_cards} currentScore = {currentScore} setcurrentScore = {setcurrentScore} highScore = {highScore} sethighScore = {sethighScore}/>
        <div id="footer">
            <div></div>
        </div>
    </div>

  )
}

export default Game
