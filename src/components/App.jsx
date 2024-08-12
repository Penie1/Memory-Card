import { fetchData } from "../utils/api";
import { shuffleArr } from "../utils/shuffleArray";
import { useEffect, useState } from "react";
import CardGrid from "./CardGrid";
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
    <div className="bg-gradient-to-t from-gray-900 via-cyan-500   to-gray-900">
      <CardGrid cards={cards} />
    </div>
  );
}

export default App;
