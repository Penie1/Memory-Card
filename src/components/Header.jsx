import PropTypes from "prop-types";
import Scoreboard from "./Scoreboard";
export default function Header({ currentScore, bestScore }) {
  return (
    <header className="flex flex-col gap-8 py-5 font-creepster">
      <h1 className="text-green-500  text-center md:text-6xl text-5xl">
        Memory Card
      </h1>
      <p className="text-gray-900 text-center text-2xl md:block hidden">
        Get points by clicking on an image but don&apos;t click on any more than
        once!
      </p>
      <Scoreboard currentScore={currentScore} bestScore={bestScore} />
    </header>
  );
}

Header.propTypes = {
  currentScore: PropTypes.number,
  bestScore: PropTypes.number,
};
