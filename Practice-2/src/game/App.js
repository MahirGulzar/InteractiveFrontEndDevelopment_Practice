import React, { Component } from 'react';

import GameLogic from './GameLogic';
import { OUTCOME } from './GameLogic';

import MoveList from './MoveList';
import UserInput from './UserInput';


/*
  App is a composition of `MoveList` and `UserInput`.
*/
class App extends Component {
    constructor(props) {
        super(props);
        this.gameLogic = new GameLogic();
        this.state = {
            moves: [],
            instructions: 'Guess either Rock(R), Paper(P) or Scissor(S)',
            hideInput: false,
            showPrevious: false
        };
    }

    //Handle user Move
    handleEnter({ userMove }) {
        //call gameLogic
        this.setState({
            showPrevious: true
        });
        let compMove = this.gameLogic.getName(this.gameLogic.nextMove());
        let result = OUTCOME.LOST;
        result = this.gameLogic.checkMove(userMove)
        userMove = this.gameLogic.getName(userMove)
        
        let output = 'You guessed ' + userMove + ' which ' + result + ' with ' + compMove;
        let cType;
        switch (result)
        {
            case OUTCOME.WON:
                cType = 'won';
                this.setState({
                    instructions: 'You Won!'
                });
                this.setState({
                    hideInput: true
                });
                break;
            case OUTCOME.LOST:
                cType = 'lost';
                break;
            case OUTCOME.TIED:
                cType = 'tied';
                break;
        }
        this.setState({
            moves: this.state.moves.concat({ text: output, classType: cType, id: this.gameLogic.movesCounter })
        });

        
    }

    render() {
        const styleType = this.state.showPrevious ? {} : { display: 'none' };
        return (
            <div className='app'>
                <h1>Game Lobby</h1>
                <h2>Rock Paper Scissors</h2>
                <p>{this.state.instructions}</p>
                <UserInput onEnter={this.handleEnter.bind(this)} isHidden={this.state.hideInput} />
                <p style={styleType}> Previous Moves:</p>
                <MoveList moves={this.state.moves} />
                  
            </div>
        );
    }
}

export default App;
