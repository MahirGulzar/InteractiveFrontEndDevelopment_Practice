import React from 'react';
import {Component} from 'react';
import PropTypes from 'prop-types';


class CreateGameButtons extends Component{

    constructor(props) {
        super(props);
        this.createRPS = this.createRPS.bind(this);
        this.createHangman = this.createHangman.bind(this);
    }

    createRPS() {
        this.props.create("RPS");
    }
    createHangman() {
        this.props.create("Hangman");
    }

    render() {
        return (
            <div className='create-game-buttons'>
                <button className='create-game' onClick={this.createRPS}>Create RPS Game</button>
                <button className='create-game' onClick={this.createHangman}>Create Hangman Game</button>
            </div>
        );
    }
}

CreateGameButtons.propTypes = {
    create: PropTypes.func.isRequired
};

export default CreateGameButtons;
