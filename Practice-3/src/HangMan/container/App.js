import React from 'react';

import AppHeader from '../components/AppHeader';
import HangmanGameComponent from '../components/Game';
import PropTypes from 'prop-types';


const App = (props) => {
    return (
    <div className="hangman-app" id={props.id}>
      <AppHeader/>
      <HangmanGameComponent game={props.game}/>
    </div>
  );
};

App.propTypes = {
    game: PropTypes.object.isRequired,
    id: PropTypes.number.isRequired
};

export default App;
