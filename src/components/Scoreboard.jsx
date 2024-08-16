import PropTypes from "prop-types";

export default function Scoreboard({ currentScore, bestScore }) {
  return (
    <div className="flex flex-col pl-10 text-2xl">
      <span className="text-slate-100">Current score: {currentScore}</span>
      <span className="text-green-500">Best score: {bestScore}</span>
    </div>
  );
}

Scoreboard.propTypes = {
  currentScore: PropTypes.number,
  bestScore: PropTypes.number,
};
