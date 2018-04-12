import React, {Component} from 'react';

import AppMenu from '../components/AppMenu';
import GameList from './GameList';
import RPS from '../RPS/game/RPS';
import Hangman from '../HangMan/game/Hangman';

class GameLobby extends Component {
    constructor(props) {
        super(props);
        this.gameCounter = 0;
        this.state = {
            gameList: []
        };
        this.onGameAdd = this.onGameAdd.bind(this);
    }
    onGameAdd(choice) {
        let gameObject;
        if (choice == 'RPS') {
            gameObject = new RPS();
        } else {
            gameObject = new Hangman();
        }
        const newGames = this.state.gameList.concat({game: gameObject, id: this.gameCounter});
        this.setState({
            gameList: newGames
        });
        this.gameCounter += 1;
    }
    render() {
        return (
            <div className="app">
                <AppMenu gameAdd={this.onGameAdd} />
                <GameList GameList={this.state.gameList}/>
            </div>
        );
    }
}
export default GameLobby;
