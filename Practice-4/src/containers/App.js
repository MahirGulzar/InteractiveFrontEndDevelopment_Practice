import React from 'react';
import GameButtonContainer from './GameButtonContainer';
import GameContainer from './GameContainer';

const App = () => {
    return (
        <div>
            <div className="app-header">
                <h1>Game Lobby</h1>
            </div>
            <GameButtonContainer />
            <GameContainer />
        </div>
    );
};

export default App;
