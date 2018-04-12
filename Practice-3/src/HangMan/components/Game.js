import React, {Component} from 'react';
import InputChangesOnSubmit from './InputChangesOnSubmit';
import PropTypes from 'prop-types';

class Game extends Component {
  constructor(props) {
      super(props);
    this.game = this.props.game;
    this.state = {
        dashedWord: this.game.getCurrentDashedWord(),
        currentImage: this.game.getCurrentImage(),
        gameOver: this.game.checkGameOver()
    };
    this.onGuess = this.onGuess.bind(this);
  }

  onGuess(guessChar) {
      this.game.checkMove(guessChar.trim().toLowerCase());
      this.setState({
          dashedWord: this.game.getCurrentDashedWord(),
          currentImage: this.game.getCurrentImage(),
          gameOver: this.game.checkGameOver()
      });
  }

  render() {
    let PlayArea;

    if (!this.state.gameOver) {
      PlayArea = (
          <div>
              <p> Guess a letter from word </p>
              <InputChangesOnSubmit onSubmit={this.onGuess} type='text' maxLength={1} />
          </div>
      );
    }
    return (
      <div className='game'>
            {PlayArea}
            <h3>{this.state.dashedWord}</h3>
            <img className='hang-img' src={this.state.currentImage} />
      </div>
    );
  }
}

Game.propTypes = {
    game: PropTypes.object.isRequired,
 };

export default Game;
