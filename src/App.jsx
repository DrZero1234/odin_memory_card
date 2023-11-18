import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import styled from "styled-components";

// API link: https://hp-api.onrender.com/

const COLORS = {
  Gryffindor: "#a02727",
  Slytherin: "#257b3f",
  Ravenclaw: "#0598b6",
  Hufflepuff: "#cb9c27",
};

const StyledCard = styled.div`
  background-color: ${(props) =>
    props.house === "Slytherin"
      ? COLORS.Slytherin
      : props.house === "Gryffindor"
      ? COLORS.Gryffindor
      : props.house === "Ravenclaw"
      ? COLORS.Ravenclaw
      : props.house === "Hufflepuff"
      ? COLORS.Hufflepuff
      : null};
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  padding: 2em;
`;

export const Card = ({ wizard_data }) => {
  const { name, house } = wizard_data;
  return (
    <StyledCard house={house}>
      {wizard_data.image && (
        <img
          src={wizard_data.image}
          style={{
            height: "400px",
            width: "400px",
            objectFit: "cover",
            order: -1,
          }}
        />
      )}
      <h1>{name}</h1>
    </StyledCard>
  );
};

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [maximumScore, setMaximumScore] = useState(0);
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

  return (
    <div className="container">
      <div className="header">Header</div>
      <div className="main-content">
        <div className="gameboard">
          {activeCards.map((card) => {
            console.log(card);
            return <Card wizard_data={card} key={card.id} />;
          })}
        </div>
      </div>
      <div className="footer">Footer</div>
    </div>
  );
}

export default App;
