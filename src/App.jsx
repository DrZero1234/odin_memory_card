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

// CARD COMPONENT

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

const HpCardTemplate = styled.div`
  background-image: url(${cardBg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 1em;
  font-family: Henny Penny, sans-serif;
  transition: transform 0.15s ease-in;
  animation: ${slideIn} 0.2s linear;
`;

const StyledCard = styled(HpCardTemplate)`
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
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
  word-break: break-word;
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
    <StyledCard onClick={() => handleClick(wizard_data.id)}>
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

//GAME OVER component

const EndScreen = ({
  isGameOver,
  isWinner,
  setIsWinner,
  setIsGameOver,
  currentScore,
  highestScore,
  restartGame,
}) => {
  const VICTORY_GIF_URLS = [
    "https://media3.giphy.com/media/26BRzozg4TCBXv6QU/giphy.gif?cid=ecf05e47qbq5eozq0mufvn3gls28k9ro6j3ydobsek3g60nc&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://i.imgur.com/kY6AFyM.jpg",
    "https://media2.giphy.com/media/wLBS2GlPDALS0/giphy.gif?cid=ecf05e47v3th935y30va3j4m63ystvg7mhgi601830d8d9pv&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media4.giphy.com/media/VwUquCGtIatGg/giphy.gif?cid=ecf05e47q1ng51u2bx0lqp9h3kh1yesi2tsc3jdrnhg1xgdo&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media1.giphy.com/media/qPCln5TSOsdRS/giphy.gif?cid=ecf05e474ef602paahxlcpj6ejskrdyaqu5tw9lcayza9yt6&ep=v1_gifs_search&rid=giphy.gif&ct=g",
  ];

  const LOSE_GIF_URLS = [
    "https://media4.giphy.com/media/720g7C1jz13wI/giphy.gif?cid=ecf05e47qbq5eozq0mufvn3gls28k9ro6j3ydobsek3g60nc&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media2.giphy.com/media/12nfFCZA0vyrSw/giphy.gif?cid=ecf05e47qbq5eozq0mufvn3gls28k9ro6j3ydobsek3g60nc&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media0.giphy.com/media/NoBXm9gmqzx96/giphy.gif?cid=ecf05e47890li6xby2y4l7clxh0u4q8gjsmjjqdda6y8kbli&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media3.giphy.com/media/d6Ni9aqSatPfq/giphy.gif?cid=ecf05e47n1vv6wnhpxkzen405tvdopa0vh217cmecaalpnb2&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media3.giphy.com/media/AisOYaOZdrS1i/giphy.gif?cid=ecf05e47bqzu1juikamcwnz31m7485h53vwnjmd4hlqmumer&ep=v1_gifs_search&rid=giphy.gif&ct=g",
  ];

  const RANDOM_INDEX = Math.floor(
    Math.random() * VICTORY_GIF_URLS.length
  );
  const gifSrc = isWinner
    ? VICTORY_GIF_URLS[RANDOM_INDEX]
    : LOSE_GIF_URLS[RANDOM_INDEX];

  const StyledEndScreen = styled(HpCardTemplate)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-size: auto;
    gap: 0.5em;
  `;

  return (
    <StyledEndScreen>
      <h2>{isWinner ? "You won!" : "You lose"}</h2>
      {!isWinner ? (
        <>
          <h3>Your score: {currentScore}</h3>
          <h4>Highest score: {highestScore}</h4>
        </>
      ) : null}
      <img src={gifSrc} className="gameover-gif" />
      <button onClick={() => restartGame()}>Restart</button>
    </StyledEndScreen>
  );
};

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);
  const [activeCards, setActiveCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [level, setLevel] = useState(1);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isWinner, setIsWinner] = useState(true);

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
    let temp = activeCards.slice();
    let copy_arr = activeCards.sort((a, b) => 0.5 - Math.random());
    if (areEqual(temp, copy_arr)) {
      copy_arr = activeCards.sort((a, b) => 0.5 - Math.random());
    }
    setActiveCards(copy_arr);
  };

  const levelUp = () => {
    setLevel(level + 1);
    setSelectedCards([]);
  };

  function areEqual(array1, array2) {
    if (array1.length === array2.length) {
      return array1.every((element, index) => {
        if (element === array2[index]) {
          return true;
        }

        return false;
      });
    }

    return false;
  }

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

    if (selectedCards.length === 18) {
      setIsWinner(true);
    }
    if (
      selectedCards.length === activeCards.length &&
      selectedCards.length > 0
    ) {
      levelUp();
    }
  }, [selectedCards, activeCards, levelUp, shuffleActiveCards]);

  const restartGame = () => {
    setSelectedCards([]);
    // Force rerender
    if (level === 1) {
      setLevel(0);
    }

    setCurrentScore(0);
    setLevel(1);
    setIsWinner(false);
    setIsGameOver(false);
  };

  const handleClick = (id) => {
    console.log(id);
    if (!selectedCards.includes(id)) {
      setCurrentScore(currentScore + 1);
      setSelectedCards([...selectedCards, id]);
    } else {
      setIsGameOver(true);
      if (currentScore > highestScore) {
        setHighestScore(currentScore);
      }
    }
  };

  return (
    <div className="container">
      <header className="header">
        <span>Highest score: {highestScore}</span>
        <span>Current score: {currentScore}</span>
      </header>
      <main>
        {isGameOver || isWinner ? (
          <EndScreen
            isGameOver={isGameOver}
            isWinner={isWinner}
            setIsGameOver={setIsGameOver}
            setIsWinner={setIsWinner}
            currentScore={currentScore}
            highestScore={highestScore}
            restartGame={restartGame}
          />
        ) : (
          <div className="gameboard">
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
          </div>
        )}
      </main>
      <div className="footer">Footer</div>
    </div>
  );
}

export default App;
