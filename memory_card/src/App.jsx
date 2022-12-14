import reactLogo from './assets/react.svg'
import './App.css'
import React, { useState } from 'react';
import Scoreboard from './components/Scoreboard';
import crystal_maiden from "./images";

function App() {

    const [cardArr,setcardArr] = useState([]);

    const handleAddingCard = (name) => {
        setcardArr(([...cardArr,name]))
    }

    

  return (
    <div className="container">
        <div id="scoreboard">
            <Scoreboard />
        </div>
        <div id="gameboard">

        </div>

    </div>

  )
}

export default App
