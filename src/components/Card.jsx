import PropTypes from "prop-types";
import { useState, useEffect } from "react";

export default function Card({ image, name, onClick }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div
      onClick={onClick}
      className={`flex flex-col cursor-pointer gap-5 bg-gray-900 rounded-xl overflow-hidden font-creepster hover:shadow-lg hover:shadow-green-500 transition-transform hover:scale-105 ease-in pb-4 
        ${
          isLoaded ? "opacity-100" : "opacity-0"
        } transition-opacity duration-500`}
    >
      <img
        src={image}
        alt={name}
        className="transition-opacity duration-300 hover:opacity-75 "
      />
      <h2 className="text-cyan-500 text-center md:text-2xl text-base tracking-wider px-1">
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
