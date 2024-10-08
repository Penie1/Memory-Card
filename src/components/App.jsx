import { fetchData } from "../utils/api";
import { shuffleArr } from "../utils/shuffleArray";
import { useEffect, useState } from "react";
import CardGrid from "./CardGrid";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState([]);
  const [bestScore, setBestScore] = useState(0);
  const currentScore = score.length ? score.length : 0;
  const cardsArr = [];
  if (cards.length !== 0) {
    for (let i = 0; i < 4; i++) {
      cardsArr.push(cards[i]);
    }
  }

  useEffect(() => {
    const getCards = async () => {
      const data = await fetchData();
      setCards(shuffleArr(data));
    };
    getCards();
  }, []);

  function handleOnClick(id) {
    return function () {
      setCards((prevCards) => shuffleArr(prevCards));
      setScore((prevScore) => [...prevScore, id]);
      checkScore(id);
    };
  }

  function checkScore(selectedCardId) {
    const hasSelectedCardId = score.includes(selectedCardId);
    if (!hasSelectedCardId) return;
    getBestScore();
    setScore([]);
  }
  function getBestScore() {
    if (currentScore < bestScore) return;
    setBestScore(currentScore);
  }

  return (
    <div className="bg-gradient-to-t from-gray-900 via-cyan-500   to-gray-900 min-h-svh flex flex-col justify-between">
      <Header currentScore={currentScore} bestScore={bestScore} />
      <CardGrid onClick={handleOnClick} cards={cardsArr} />
      <Footer />
    </div>
  );
}

export default App;
