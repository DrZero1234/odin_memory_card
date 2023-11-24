import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import cardBg from "./assets/cardBg.jpg";

import styled, { keyframes } from "styled-components";

import hufflepuffLogo from "./assets/Hufflepuff.png";
import slytherinLogo from "./assets/Slytherin.png";
import gryffindorLogo from "./assets/Gryffindor.png";
import ravenclawLogo from "./assets/Ravenclaw.png";
import OtherLogo from "./assets/Other.png";

// API link: https://hp-api.onrender.com/

const COLORS = {
  Gryffindor: "#a02727",
  Slytherin: "#257b3f",
  Ravenclaw: "#0598b6",
  Hufflepuff: "#cb9c27",
  Other: "#808080",
};

/*
  background-color: 
*/

const slideIn = keyframes`
  from{
    transform: scale(0);
  } to {
    transform: scale(1);
  }
`;

const StyledCard = styled.div`
  background-image: url(${cardBg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 1em;
  font-family: Henny Penny, sans-serif;
  transition: transform 0.2s ease-in;
  animation: ${slideIn} 0.2s linear;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  h3 {
    font-size: 2.5rem;
  }
`;

const CardContent = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-style: solid;
  border-width: 20px;
  border-radius: 2em;
  overflow: hide;
  border-color: ${(props) =>
    props.house === "Slytherin"
      ? COLORS.Slytherin
      : props.house === "Gryffindor"
      ? COLORS.Gryffindor
      : props.house === "Ravenclaw"
      ? COLORS.Ravenclaw
      : props.house === "Hufflepuff"
      ? COLORS.Hufflepuff
      : COLORS.Other};
  padding: 0.5em;
  letter-spacing: 0.2em;

  h3 {
    text-align: center;
  }
`;

export const Card = ({ wizard_data, handleClick }) => {
  const { name, house } = wizard_data;

  const logoSrc =
    house === "Hufflepuff"
      ? hufflepuffLogo
      : house === "Slytherin"
      ? slytherinLogo
      : house === "Gryffindor"
      ? gryffindorLogo
      : house === "Ravenclaw"
      ? ravenclawLogo
      : OtherLogo;

  return (
    <StyledCard
      id={wizard_data.id}
      onClick={(e) => handleClick(e.target.id)}
    >
      <CardContent house={house}>
        <h3>{name}</h3>
        {wizard_data.image && (
          <img
            src={wizard_data.image}
            style={{
              display: "flex",
              height: "200px",
              width: "200px",
              objectFit: "cover",
              order: -1,
            }}
          />
        )}
        <img src={logoSrc} className="cardLogo" />
      </CardContent>
    </StyledCard>
  );
};

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);
  const [activeCards, setActiveCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [level, setLevel] = useState(1);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isWinner, setIsWinner] = useState(false);

  const getLevelCards = () => {
    switch (true) {
      case level === 1:
        return 3;
      case level === 2:
        return 6;
      case level === 3:
        return 9;
      case level === 4:
        return 12;
      case level === 5:
        return 15;
      case level === 6:
        return 18;
      case level > 6:
        console.log("Winner");
        break;
    }
  };

  const shuffleActiveCards = () => {
    let copy_arr = activeCards.sort((a, b) => 0.5 - Math.random());
    setActiveCards(copy_arr);
  };

  const fetchData = () => {
    fetch("https://hp-api.onrender.com/api/characters")
      .then((response) => response.json())
      .then((data) => {
        const arr_range = 24;
        let copy_arr = [];
        let used_indexes = [];
        while (copy_arr.length < getLevelCards()) {
          let random_index = Math.floor(Math.random() * arr_range);
          while (used_indexes.includes(random_index)) {
            random_index = Math.floor(Math.random() * arr_range);
          }
          copy_arr.push(data[random_index]);
          used_indexes.push(random_index);
        }
        setActiveCards(copy_arr);
      });
  };

  useEffect(() => {
    fetchData();
  }, [level]);

  useEffect(() => {
    shuffleActiveCards();
  }, [currentScore]);

  const levelUp = () => {
    setLevel(level + 1);
    setSelectedCards([]);
  };

  const gameOver = () => {
    if (currentScore > highestScore) {
      setHighestScore(currentScore);
    }
    setSelectedCards([]);
    setLevel(0);
    setLevel(1);
    setCurrentScore(0);
    // Force rerender
  };

  const handleClick = (id) => {
    console.log(id);
    if (!selectedCards.includes(id)) {
      setCurrentScore(currentScore + 1);
      setSelectedCards([...selectedCards, id]);
      if (selectedCards.length === activeCards.length) {
        levelUp();
      }
    } else {
      gameOver();
    }
  };

  return (
    <div className="container">
      <header className="header">
        <span>Highest score: {highestScore}</span>
        <span>Current score: {currentScore}</span>
      </header>
      <main className="gameboard">
        {activeCards.map((card) => {
          console.log(card);
          return (
            <Card
              wizard_data={card}
              key={card.id}
              handleClick={handleClick}
            />
          );
        })}
      </main>
      <div className="footer">Footer</div>
    </div>
  );
}

export default App;
