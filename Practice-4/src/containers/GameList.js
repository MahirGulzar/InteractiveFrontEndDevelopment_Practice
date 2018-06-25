import React from 'react';
import PropTypes from 'prop-types';
import RPSApp from './RPS/Game';
import HangmanApp from './Hangman/Game';

const GameList = (props) => {
    console.log(props.games.length);
        const listElements = props.games.map((gameId) => {
            if (props.gameType == 'RPS') {
                return <RPSGameComponent key={gameId} moves={props.moves} gameStatus={props.gameStatus} guess={props.submit} />;
            } else if (props.gameType == 'Hangman') {
                return <HangmanGameComponent key={gameId} guessedLetters={props.guessedLetters} wrongGuessCount={props.wrongGuessCount} gameStatus={props.gameStatus} guess={props.submit} />;
            }
        });
  return (
    <div className="game-list">
      {listElements}
    </div>
  );
};

GameList.propTypes = {
    games: PropTypes.array,
 };

export default GameList;
