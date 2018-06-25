import React from 'react';
import InputChangesOnSubmit from '../../components/InputChangesOnSubmit';
import HangmanProgress from '../../components/Hangman/HangmanProgress';
import PropTypes from 'prop-types';

const Game = ({status, wrongGuessCount, letters, onGuess}) => {
  let PlayArea;

  if (status === 'waiting_for_move') {
    PlayArea = (
      <div className='play-area'>
      <p> Guess a letter from the word: </p>
      <InputChangesOnSubmit onSubmit={onGuess} type='text' maxLength={1} submitImmediately={true}/>
      </div>
    );
  }
  return (
    <div className='game hangman'>
    <h3> Hangman </h3>
    {PlayArea}
    <HangmanProgress wrongGuessCount={wrongGuessCount} letters={letters} />
    </div>
  );
};

Game.propTypes = {
  onGuess: PropTypes.func.isRequired,
  wrongGuessCount: PropTypes.number.isRequired,
  letters: PropTypes.array.isRequired,
  status: PropTypes.string.isRequired
};

export default Game;
