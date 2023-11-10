import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const ACTIVE_MOCK = [
    {
      id: 1,
      image:
        "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png",
      name_loc: "Anti-Mage",
      primary_attr: 1,
    },
    {
      id: 18,
      image:
        "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/sven.png",
      name_loc: "Sven",
      primary_attr: 0,
    },
  ];

  const [currentScore, setCurrentScore] = useState(0);
  const [maximumScore, setMaximumScore] = useState(0);
  const [activeCards, setActiveCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [level, setLevel] = useState(1);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isWinner, setIsWinner] = useState(false);

  const ACTIVE_IDS = activeCards.map((card) => card.id);

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

  useEffect(() => {
    const random_id = Math.floor(Math.random() * 20);
    if (activeCards.length < getLevelCards()) {
      let arr_copy = activeCards.slice();
      console.log(`Arr copy: ${arr_copy}`);
      if (!arr_copy.includes(random_id)) {
        arr_copy = [...arr_copy, random_id];
        setActiveCards(arr_copy);
      } else {
        console.log(`Missed :${random_id}`);
      }
    }
    console.log(activeCards);
  }, [level, activeCards.length]);
  /*
  useEffect(() => {
    for (let i = 0; i < getLevelCards()) {
      const random_id = Math.floor(Math.random() * 120);
      fetch(
        `https://dota2-heroes.p.rapidapi.com/heroes/english/${random_id}`,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "1ec2ba9090msh3531ee83ce839c0p184e6cjsn8edc84a71631",
            "X-RapidAPI-Host": "dota2-heroes.p.rapidapi.com",
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          if (!ACTIVE_IDS.includes(random_id)) {
            setActiveCards([...activeCards, data]);
            console.log(random_id);
          }
        });
    }
  }, [level]);
*/
}

export default App;
