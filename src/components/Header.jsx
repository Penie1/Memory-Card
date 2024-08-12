import PropTypes from "prop-types";
import Scoreboard from "./Scoreboard";
export default function Header({ currentScore, bestScore }) {
  return (
    <header className="py-5 font-creepster">
      <h1 className="text-green-400  text-center text-6xl">Memory Card</h1>
      <Scoreboard currentScore={currentScore} bestScore={bestScore} />
    </header>
  );
}

Header.propTypes = {
  currentScore: PropTypes.number,
  bestScore: PropTypes.number,
};
