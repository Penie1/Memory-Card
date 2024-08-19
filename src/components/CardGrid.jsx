import Card from "./Card";
import PropTypes from "prop-types";
export default function CardGrid({ cards, onClick }) {
  return (
    <div className=" grid md:grid-cols-4  grid-cols-2 justify-items-center md:gap-8 gap-4 p-5 mb-12 ">
      {cards.map((card) => (
        <Card
          id={card.id}
          onClick={onClick(card.id)}
          key={card.id}
          image={card.image}
          name={card.name.split(" ")[0]}
        />
      ))}
    </div>
  );
}

CardGrid.propTypes = {
  cards: PropTypes.array,
  onClick: PropTypes.func,
};
