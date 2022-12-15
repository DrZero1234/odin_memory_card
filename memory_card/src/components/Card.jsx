import React,{useState} from "react";

const Card = (props) => {

    const PATH = "../images"
    const {id,filename,label} = props

    return (
        <div class = "card">
            <img src={`${PATH}/${filename}`}></img>
            <h3>{label}</h3>
        </div> 
    )
}

export default Card;