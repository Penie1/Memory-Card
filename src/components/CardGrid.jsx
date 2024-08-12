import Card from "./Card";
import PropTypes from "prop-types";
export default function CardGrid({ cards, onClick }) {
  return (
    <div className=" grid grid-cols-2 md:grid-cols-3 gap-8 p-5  ">
      {cards.map((card) => (
        <Card
          id={card.id}
          onClick={onClick(card.id)}
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
  onClick: PropTypes.func,
};
