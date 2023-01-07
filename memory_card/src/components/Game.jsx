import React, { useEffect, useState } from 'react';
import Scoreboard from './Scoreboard';
import Gameboard from './Gameboard';
import card_data from "../cards_data";

const  Game = () => {


    const [level,setLevel] = useState(1);
    const [range,setRange] = useState(3);
    const [cardsArr,setcardsArr] = useState([])
    const [currentScore,setcurrentScore] = useState(0);
    const [highScore,sethighScore] = useState(0);
    const [selectedArr,setselectedArr] = useState([]);

    const isUniqueCard = (name) => {
        return selectedArr.includes(name);
    }

    const shuffleCards = () => {
        setcardsArr(cardsArr.sort(() => Math.random() - 0.5));
    }

    const isHighScore = () => {
        if (currentScore > highScore) {
            sethighScore(currentScore)
        }
    }

    const fillCardsArr = () => {
        const new_arr = [];
        if (level < 8) {
            while (new_arr.length < range) {
            let random_item = card_data[Math.floor(Math.random() * card_data.length)]
            if (!new_arr.some(e => e.id === random_item.id)) {
                new_arr.push(random_item)
            }
        }
        setcardsArr(new_arr)
    }
    }

    const nextRound = () => {
        if (selectedArr.length === range) {
            levelUp()
        }
    }
    
    const levelUp = () => {
        setLevel(level + 1);
        setRange(range + 2);
        setselectedArr([]);
    }

    const handleCardClick = (name) => {
        if (!isUniqueCard(name)) {
            setcurrentScore(currentScore + 1)
            setselectedArr([...selectedArr, name]);

        } else {
            resetGame()
        }
    }

    useEffect(shuffleCards)
    useEffect(fillCardsArr,[level])
    useEffect(isHighScore,[currentScore])
    useEffect(nextRound,[selectedArr])


    const resetGame = () => {
        setselectedArr([]);
        setcurrentScore(0);
        setLevel(1)
        setRange(3)
        fillCardsArr()
    }




    

  return (
    <div className="container">
        <div id="header">
            <h1>Dota memory game</h1>
        </div>
        <div id="scoreboard">
            <Scoreboard current_score = {currentScore} highscore = {highScore}/>
        </div>
        <div id = "content-wrapper">
            <h2>Level {level}</h2>
            <button onClick={resetGame}>Reset</button>
            <Gameboard cardsArr = {cardsArr} setcurrentScore = {setcurrentScore}  sethighScore = {sethighScore} setselectedArr = {setselectedArr} handleCardClick = {handleCardClick}/>
        </div>
        
        <div id="footer">
            <div>
                <div id="footer-content">
                <span id="copyright-text">@Copyright 2022</span>
                <a href='#'><img id="footer_logo" src="Footer_logo.png"></img></a>
            </div>
            </div>
        </div>
    </div>

  )
}

export default Game
