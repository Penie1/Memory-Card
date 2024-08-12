import { shuffleArr } from "../utils/shuffleArray";
import Card from "./Card";
import PropTypes from "prop-types";
export default function CardGrid({ cards, setCards }) {
  function handleOnClick() {
    setCards((prevCards) => shuffleArr(prevCards));
  }
  return (
    <div className=" grid grid-cols-2 md:grid-cols-3 gap-8 p-5  ">
      {cards.map((card) => (
        <Card
          id={card.id}
          onClick={handleOnClick}
          key={card.id}
          image={card.image}
          name={card.name}
        />
      ))}
    </div>
  );
}

CardGrid.propTypes = {
  cards: PropTypes.array,
  setCards: PropTypes.func,
};
