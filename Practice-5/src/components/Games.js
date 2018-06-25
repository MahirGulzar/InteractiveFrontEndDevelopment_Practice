import React from 'react';
import PropTypes from 'prop-types';
import HangmanGame from '../components/Hangman/Game';
import RPSGame from '../components/RPS/Game';

const Games = (props) => {
  if (props.fetchState) {
    if (props.fetchState.error) {
      return (<p>No connection from server.. </p>);
    }
  }
  const gameComponents = props.games.map((game) => {
    const onGameGuess = (guess) => {
      props.onGuess(game.id, guess);
    };
      if (game.type === 'hangman') {
        return <HangmanGame key={game.id} onGuess={onGameGuess} {...game} />;
      } else {
        return <RPSGame key={game.id} onGuess={onGameGuess} {...game} />;
      }
  });
  let showTags=null;
  if (props.fetchState) {
    if (props.fetchState.inFlight) {
        return <p> Fetching Games from server... </p>;
      } else if (props.fetchState.error) {
        return <p> {props.fetchState.error} </p>;
      } else {
        showTags=gameComponents;
      }
  } else {
    showTags=gameComponents;
  }
  return (
    <div className="games">
      {showTags}
    </div>
  );
};

Games.propTypes = {
  games: PropTypes.array.isRequired,
  onGuess: PropTypes.func.isRequired,
  fetchState: PropTypes.object
};

export default Games;
