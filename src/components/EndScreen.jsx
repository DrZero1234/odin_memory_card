import styled from "styled-components";
import { HpCardTemplate } from "./styled/HpCardTemplate";

const StyledEndScreen = styled(HpCardTemplate)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-size: auto;
  gap: 0.5em;

  button {
    padding: 0.5em 3em;
    font-size: 1.5rem;
    border: none;
  }
`;

export const EndScreen = ({
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

  return (
    <StyledEndScreen>
      <h2>{isWinner ? "You won!" : "You lose"}</h2>
      {!isWinner ? (
        <div className="gameover-content-animated">
          <h3>Better luck next time</h3>
          <h3>Your score: {currentScore}</h3>
          <h4>Highest score: {highestScore}</h4>
        </div>
      ) : (
        <div className="gameover-content-animated">
          <h3>Congratulations you completed the game!</h3>
        </div>
      )}
      <img src={gifSrc} className="gameover-gif" />
      <button
        className="gameover-content-animated btn-anim"
        onClick={() => restartGame()}
      >
        Restart
      </button>
    </StyledEndScreen>
  );
};
