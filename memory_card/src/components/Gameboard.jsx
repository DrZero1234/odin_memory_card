import React,{useState} from "react";
import card_data from "../cards_data";
import Card from "./Card";



const Gameboard =  (props) => {
    
    const {currentScore,setcurrentScore,highScore,sethighScore,handleCardClick} = props
    const {cardsArr} = props 

    const display_gameboard = () => {
        
    }
    
    return(
        <div id="gameboard">
        {cardsArr.map((card) => (
            <Card id={card.id} filename={card.filename} label = {card.label} attr = {card.attr} key={card.id} handleCardClick = {handleCardClick} />
        ))}
        </div>
    )
}

export default Gameboard