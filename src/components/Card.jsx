import PropTypes from "prop-types";
export default function Card({ image, name, onClick }) {
  return (
    <div
      onClick={onClick}
      className="flex flex-col cursor-pointer gap-5 bg-gray-900  rounded-xl overflow-hidden font-creepster max-w-64 pb-4 "
    >
      <img src={image} alt={name} />
      <h2 className="text-cyan-500 text-center  md:text-2xl text-base tracking-wider px-1">
        {name.toUpperCase()}
      </h2>
    </div>
  );
}

Card.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.number,
  onClick: PropTypes.func,
};
