import PropTypes from "prop-types";

export default function Scoreboard({ currentScore, bestScore }) {
  return (
    <div className="flex md:flex-col justify-between pr-10 pl-10 md:text-2xl text-lg">
      <span className="text-slate-100">Current score: {currentScore}</span>
      <span className="text-green-500">Best score: {bestScore}</span>
    </div>
  );
}

Scoreboard.propTypes = {
  currentScore: PropTypes.number,
  bestScore: PropTypes.number,
};
