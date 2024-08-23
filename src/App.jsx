import React from "react";
import { useReducer } from "react";
import { memeoryCardReducer } from "./MemoryCardReducer";
import { Header } from "./components/Header";
import { EndScreen } from "./components/EndScreen";

const defaultState = {
  currentScore: 0,
  highestScore: 0,
  activeCards: [],
  selectedCards: [],
  level: 1,
  isGameOver: true,
  isWinner: false,
};

function App() {
  const [state, dispatch] = useReducer(
    memeoryCardReducer,
    defaultState
  );
  console.log(state);
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
          <h1>Not end Screen</h1>
        )}
      </main>
    </div>
  );
}

export default App;
