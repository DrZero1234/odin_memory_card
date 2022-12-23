import React,{useState} from "react";

const Card = (props) => {


    const {id,filename,label,attr,setcurrentScore,sethighScore,setselectedArr,handleCardClick} = props;


    return (
        <div className = "card"   style={{background: `linear-gradient(to top,${attr === "str" ? "red" : attr === "agi" ? "green" : attr === "int" ? "blue" : null},white)`}} onClick = {(e) => handleCardClick(filename.slice(0,-4))}>
            <img  src={`images/${filename}`}></img>
            <h3 className="card-label" >{label}</h3>
        </div> 
    )
}

export default Card;