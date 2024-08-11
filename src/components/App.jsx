import { fetchData } from "../utils/api";
import { shuffleArr } from "../utils/shuffleArray";
import { useEffect, useState } from "react";
function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const getCards = async () => {
      const data = await fetchData();
      setCards(shuffleArr(data));
    };
    getCards();
  }, []);
  return (
    <>
      {cards.map((c) => (
        <h1 key={c.id}>{c.name}</h1>
      ))}
    </>
  );
}

export default App;
