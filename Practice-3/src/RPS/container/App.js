import React from 'react';

import AppHeader from '../components/AppHeader';
import RPSGameComponent from '../components/Game';
import PropTypes from 'prop-types';


const App = (props) => {
    return (
    <div className="rps-app" id={props.id}>
      <AppHeader/>
      <RPSGameComponent game={props.game}/>
    </div>
  );
};

App.propTypes = {
    game: PropTypes.object.isRequired,
    id: PropTypes.number.isRequired
};

export default App;
