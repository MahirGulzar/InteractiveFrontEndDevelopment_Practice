import React, {Component} from 'react';
import MoveHistory from '../../components/RPS/MoveHistory';
import InputChangesOnSubmit from '../../components/InputChangesOnSubmit';
import PropTypes from 'prop-types';

const GUESS_CHAR_TO_GUESS = {
  'R': 'ROCK',
  'P': 'PAPER',
  'S': 'SCISSORS'
};

class Game extends Component {
  constructor(props) {
    super(props);
    this.onGuess = this.onGuess.bind(this);
  }

  onGuess(guessChar) {
    const guess = GUESS_CHAR_TO_GUESS[guessChar];
    if (guess) {
        this.props.guess(this.props.gameId, guessChar);
    } else {
      return;
    }
  }

  render() {
      let PlayArea;
      const gameStatus = this.props.gameStatus;

      if (gameStatus=== 'finished') {
      PlayArea = (
        <p> You won! </p>
      );
    } else {
      PlayArea = (
        <div>
          <p> Guess either Rock(R), Paper(P) or Scissors(S) </p>
          <InputChangesOnSubmit onSubmit={this.onGuess} type='text' maxLength={1} />
        </div>
      );
    }
    return (
      <div className='game'>
        <h3> Rock Paper Scissors </h3>
        {PlayArea}
        <MoveHistory moves={this.props.moves} />
      </div>
    );
  }
}

Game.propTypes = {
    moves: PropTypes.array,
    guess: PropTypes.func,
    getStatus: PropTypes.string,
};

export default Game;
