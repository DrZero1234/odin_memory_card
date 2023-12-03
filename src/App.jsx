import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import styled from "styled-components";

import { Header } from "./components/Header";
import { Card } from "./components/Card";
import { EndScreen } from "./components/EndScreen";

import { getLevelCards } from "./utils/getLevelCards";

import GithubLogo from "./assets/FooterGithub.svg?react";
import ApiLogo from "./assets/FooterApi.svg?react";
import { areEqualArrays } from "./utils/areEqualArrays";

// API link:

// CARD COMPONENT

/*
  background-color: 
*/

const Footer = () => {
  return (
    <footer>
      <ApiLogo />
      <GithubLogo />
    </footer>
  );
};

//GAME OVER component

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);
  const [activeCards, setActiveCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [level, setLevel] = useState(1);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isWinner, setIsWinner] = useState(false);

  const shuffleActiveCards = () => {
    let temp = activeCards.slice();
    let copy_arr = activeCards.sort((a, b) => 0.5 - Math.random());
    if (areEqualArrays(temp, copy_arr)) {
      copy_arr = activeCards.sort((a, b) => 0.5 - Math.random());
    }
    setActiveCards(copy_arr);
  };

  const levelUp = () => {
    setLevel(level + 1);
    setSelectedCards([]);
  };

  const fetchData = () => {
    fetch("https://hp-api.onrender.com/api/characters")
      .then((response) => response.json())
      .then((data) => {
        const arr_range = 24;
        let copy_arr = [];
        let used_indexes = [];
        while (copy_arr.length < getLevelCards(level)) {
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
      <Header
        highestScore={highestScore}
        currentScore={currentScore}
        level={level}
      />
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
      <Footer />
    </div>
  );
}

export default App;
