import React, {Component} from 'react';
import InputChangesOnSubmit from '../../components/InputChangesOnSubmit';
import HangmanProgress from '../../components/Hangman/HangmanProgress';
import PropTypes from 'prop-types';

class Game extends Component {
  constructor(props) {
    super(props);
    this.onGuess = this.onGuess.bind(this);
  }

  onGuess(guessChar) {
    this.props.guess(this.props.gameId,guessChar);

  }

  render() {
    let PlayArea;
    const gameStatus = this.props.gameStatus;

    if (gameStatus === 'waiting_for_move') {
      PlayArea = (
        <div className='play-area'>
          <p> Guess a letter from the word: </p>
          <InputChangesOnSubmit onSubmit={this.onGuess} type='text' maxLength={1} submitImmediately={true}/>
        </div>
      );
    }
    return (
      <div className='game hangman'>
        <h3> Hangman </h3>
        {PlayArea}
        <HangmanProgress wrongGuessCount={this.props.wrongGuessCount} letters={this.props.guessedLetters} />
      </div>
    );
  }
}

Game.propTypes = {
    guess: PropTypes.func,
    getStatus: PropTypes.string,
    wrongGuessCount: PropTypes.Number,
    guessedLetters: PropTypes.string,
};

export default Game;
