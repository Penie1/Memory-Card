import PropTypes from "prop-types";

export default function Scoreboard({ currentScore, bestScore }) {
  return (
    <p className="flex flex-col text-white text-right pr-10 text-2xl">
      <span>Current score: {currentScore}</span>
      <span>Best score: {bestScore}</span>
    </p>
  );
}

Scoreboard.propTypes = {
  currentScore: PropTypes.number,
  bestScore: PropTypes.number,
};
