import React, { useEffect, useState } from 'react';
import Scoreboard from './Scoreboard';
import Gameboard from './Gameboard';
import Crystal_maiden from "../images/Crystal_maiden.png"

function Game(props) {

    const [level,setLevel] = useState(3);
    const [cardsArr,setcardsArr] = useState([]);
    const [selectedArr,setselectedArr] = useState([]);

    const isUniqueCard = (name) => {
        return selectedArr.includes(name);
    }

    const handleAddingCard = (name) => {
        if (isUniqueCard(name)) {
            setcardArr(([...cardArr,name]))
        }
        else {
            // TODO
        }
    }

    const resetGame = () => {
        setLevel(3);
        setcardsArr([]);
        setselectedArr([]);

    }

    const nextLevel = () => {
        setLevel(level + 2);
    }

    

  return (
    <div className="container">
        <div id="scoreboard">
            <Scoreboard />
        </div>
        <Gameboard />
    </div>

  )
}

export default Game
