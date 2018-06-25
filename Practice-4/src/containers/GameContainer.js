import React from 'react';

import { connect } from 'react-redux';
import { submit } from '../actions';

import GameList from './GameList';



const mapDispatchToProps = (dispatch) => {
    return {
        submit: (gameId, letter) => dispatch(submit(gameId, letter))
    };
};

const mapStateToProps = (state) => {
    console.log(state);
    if (state[0].games.length <= 0)
    {

        return ({
            
            games: state[0].games,
        });
    }

    if (state.type == 'Hangman') {
        return ({
            gameStatus: state.getgameStatus,
            gameId: state.gameId,
            gameType: state.gameType,
            guessedLetters: state.guessedLetters,
            wrongGuessCount: state.wrongGuessCount,
            games: state.games,
        });
    }
    else if (state.tyoe == 'RPS') {
        return ({
            gameStatus: state.gameStatus,
            gameId: state.gameId,
            gameType: state.gameType,
            moves: state.moves,
            games: state.games,
        });
    }



};

export default connect(mapStateToProps, mapDispatchToProps)(GameList)