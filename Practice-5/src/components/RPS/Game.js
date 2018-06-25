import React from 'react';
import MoveHistory from '../../components/RPS/MoveHistory';
import InputChangesOnSubmit from '../../components/InputChangesOnSubmit';
import PropTypes from 'prop-types';

const GUESS_CHAR_TO_GUESS = {
  'R': 'ROCK',
  'P': 'PAPER',
  'S': 'SCISSORS'
};

const Game = ({status, onGuess, move}) => {
  let PlayArea;
  let moves=[];

  if (move!=undefined) {
    moves.push(move);
  }
  const onSubmit = (guessChar) => {
    const guess = GUESS_CHAR_TO_GUESS[guessChar];
    if (guess) {
      onGuess(guess);
    }
  };

  if (status === 'finished') {
    PlayArea = (
      <p> You won! </p>
    );
  } else {
    PlayArea = (
      <div>
        <p> Guess either Rock(R), Paper(P) or Scissors(S) </p>
        <InputChangesOnSubmit onSubmit={onSubmit} type='text' maxLength={1} />
      </div>
    );
  }
  return (
    <div className='game'>
      <h3> Rock Paper Scissors </h3>
      {PlayArea}
      <MoveHistory moves={moves} />
    </div>
  );
};

Game.propTypes = {
  onGuess: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  move: PropTypes.object
};

export default Game;
