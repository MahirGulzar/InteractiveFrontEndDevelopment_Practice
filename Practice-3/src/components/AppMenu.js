import React, {Component} from 'react';
import PropTypes from 'prop-types';

class AppMenu extends Component {
    constructor(props) {
        super(props);
        this.onRPS = this.onRPS.bind(this);
        this.onHangMan = this.onHangMan.bind(this);
    }

    onRPS() {
        this.props.gameAdd('RPS');
    }

    onHangMan() {
        this.props.gameAdd('Hangman');
    }

    render() {
        return (
            <div className='app-header'>
                <h1>Game Lobby</h1>
                <button onClick={this.onRPS}>
                    Create RPS-Game
                 </button>
                <button onClick={this.onHangMan}>
                    Create Hangman-Game
                 </button>
            </div>
        );
    }
}

AppMenu.propTypes = {
    gameAdd: PropTypes.func.isRequired,
};

export default AppMenu;
