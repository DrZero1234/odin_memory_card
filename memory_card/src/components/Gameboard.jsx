import React,{useState} from "react";
import card_data from "../cards_data";
import Card from "./Card";



const Gameboard =  (props) => {
    
    const {currentScore,setcurrentScore,highScore,sethighScore} = props
    const {shuffled_cards} = props 

    const display_gameboard = () => {
        
    }
    
    return(
        <div id="gameboard">
        {shuffled_cards.map((card) => (
            <Card id={card.id} filename={card.filename} label = {card.label} attr = {card.attr} key={card.id} currentScore = {currentScore} setcurrentScore = {setcurrentScore} sethighScore = {sethighScore} highScore = {highScore}/>
        ))}
        </div>
    )
}

export default Gameboard