import React from 'react';
import PropTypes from 'prop-types';

const gameButtons = [
  {description: 'Create RPS game', type: 'rps'},
  {description: 'Create Hangman game', type: 'hangman'}
];

const CreateGameButtons = ({createGame}) => {
  const buttons = gameButtons.map(({description, type}, index) =>
    <button key={index} className='create-game' onClick={() => createGame(type)}>
      {description}
    </button>
  );

  return (
    <div className='create-game-buttons'>
      {buttons}
    </div>
  );
};

CreateGameButtons.propTypes = {
  createGame: PropTypes.func.isRequired
};

export default CreateGameButtons;
