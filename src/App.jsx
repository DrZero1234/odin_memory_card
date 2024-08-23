import React from "react";
import { useReducer } from "react";
import { memeoryCardReducer } from "./MemoryCardReducer";
import { Header } from "./components/Header";
import { EndScreen } from "./components/EndScreen";
import { Card } from "./components/Card";
import { getLevelCards } from "./utils/getLevelCards";

import GithubLogo from "./assets/FooterGithub.svg?react";
import ApiLogo from "./assets/FooterApi.svg?react";

const defaultState = {
  currentScore: 0,
  highestScore: 0,
  activeCards: [],
  selectedCards: [],
  level: 1,
  isGameOver: false,
  isWinner: false,
};

const fetchData = (state = defaultState) => {
  fetch("https://hp-api.onrender.com/api/characters")
    .then((response) => response.json())
    .then((data) => {
      const arr_range = 24;
      let copy_arr = [];
      let used_indexes = [];
      while (copy_arr.length < getLevelCards(state.level)) {
        console.log(state.level);
        let random_index = Math.floor(Math.random() * arr_range);
        while (used_indexes.includes(random_index)) {
          random_index = Math.floor(Math.random() * arr_range);
        }
        copy_arr.push(data[random_index]);
        used_indexes.push(random_index);
      }
      console.log({
        ...state,
        activeCards: copy_arr,
      });
      return {
        ...state,
        activeCards: copy_arr,
      };
    });
};

const Footer = () => {
  return (
    <footer>
      <ApiLogo />
      <GithubLogo />
    </footer>
  );
};

function App() {
  const [state, dispatch] = useReducer(
    memeoryCardReducer,
    defaultState,
    fetchData
  );
  console.log(state);

  const handleCardClick = (id) => {
    if (!state.selectedCards.includes(id)) {
      dispatch({
        type: "correct_card",
        cardId: id,
      });
    } else {
      dispatch({
        type: "incorrect_card",
      });
      if (state.currentScore > state.highestScore) {
        dispatch({ type: "highestScore" });
      }
    }
  };
  return (
    <div className="container">
      <Header
        highestScore={state.highestScore}
        currentScore={state.currentScore}
        level={state.level}
      />
      <main>
        {state.isGameOver || state.isWinner ? (
          <EndScreen state={state}></EndScreen>
        ) : (
          <div className="gameboard">
            {state.activeCards.map((card) => {
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
    </div>
  );
}

export default App;
