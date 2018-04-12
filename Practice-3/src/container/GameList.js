import React from 'react';
import PropTypes from 'prop-types';
import RPSApp from '../RPS/container/App';
import HangmanApp from '../HangMan/container/App';
import RPS from '../RPS/game/RPS';

const GameList = (props) => {
    const listElements = props.GameList.map((game) => {
        if (game.game instanceof (RPS)) {
            return (
                <RPSApp game={game.game} key={game.id} />
            );
        } else {
            return (
                <HangmanApp game={game.game} key={game.id}/>
            );
        }
  });
  return (
    <div className="game-list">
      {listElements}
    </div>
  );
};

GameList.propTypes = {
    GameList: PropTypes.arrayOf(PropTypes.shape({
    game: PropTypes.object,
    id: PropTypes.number,
  })).isRequired
 };

export default GameList;
