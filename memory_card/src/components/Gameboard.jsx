import React,{useState} from "react";
import card_data from "../cards_data";
import Card from "./Card";



const Gameboard =  () => {
    

    const shuffled_cards = card_data.sort(() => Math.random() * 0.5);
    console.log(shuffled_cards)
    
    return(
        <div id="gameboard">
        {shuffled_cards.map((card) => (
            <Card id={card.id} filename={card.filename} label = {card.label}/>
        ))}
        </div>
    )
}

export default Gameboard