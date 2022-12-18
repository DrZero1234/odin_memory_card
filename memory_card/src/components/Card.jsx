import React,{useState} from "react";

const Card = (props) => {


    const {id,filename,label,attr,setcurrentScore,sethighScore,setselectedArr,handleCardClick} = props;


    return (
        <div className = "card" data-hero = {filename.slice(0,-4)}  style={{background: `linear-gradient(to top,${attr === "str" ? "red" : attr === "agi" ? "green" : attr === "int" ? "blue" : null},white)`}} onClick = {(e) => handleCardClick(e.target.dataset.hero)}>
            <img data-hero = {filename.slice(0,-4)} src={`images/${filename}`}></img>
            <h3 className="card-label">{label}</h3>
        </div> 
    )
}

export default Card;