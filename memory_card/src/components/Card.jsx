import React,{useState} from "react";

const Card = (props) => {

    const [cardsArr,setcardsArr] = useState([]);
    const [selectedArr,setselectedArr] = useState([]);
    const {id,filename,label,attr} = props
    const {currentScore,setcurrentScore,highScore,sethighScore} = props;

    return (
        <div className = "card" data-hero = {filename.slice(0,-4)}  style={{background: `linear-gradient(to top,${attr === "str" ? "red" : attr === "agi" ? "green" : attr === "int" ? "blue" : null},white)`}} onClick = {(e) => setcurrentScore(currentScore + 1)}>
            <img src={`images/${filename}`}></img>
            <h3 className="card-label">{label}</h3>
        </div> 
    )
}

export default Card;