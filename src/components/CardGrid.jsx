import Card from "./Card";
import PropTypes from "prop-types";
export default function CardGrid({ cards }) {
  return (
    <div className=" grid grid-cols-2 md:grid-cols-3 gap-8 p-5  ">
      {cards.map((card) => (
        <Card key={card.id} image={card.image} name={card.name} />
      ))}
    </div>
  );
}

CardGrid.propTypes = {
  cards: PropTypes.array,
};
