import PropTypes from "prop-types";

export default function Card({ image, name }) {
  return (
    <div className="flex flex-col cursor-pointer gap-5 bg-gray-900  rounded-xl overflow-hidden font-creepster">
      <img src={image} alt={name} />
      <h2 className="text-cyan-500 text-center mb-5 text-2xl tracking-wider">
        {name.toUpperCase()}
      </h2>
    </div>
  );
}

Card.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
};
