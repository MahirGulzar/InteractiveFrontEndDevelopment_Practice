import RPS from '../games/RPS';
import Hangman from '../games/Hangman';

export let games = {};// Game instances list
let gameList = [];
let gameId = 0;
// ...
export const newGameStarted = (gameType) => {
    
    games[gameId] = gameType;
    
};

// Export action type constants for reducers to use
export const CREATE = 'CREATE';
export const create = (gameType) => {
    let game;
    gameList.concat(gameId);
   
    if (gameType == "Hangman")
    {
        game = Hangman.generate();
        newGameStarted(game);
        return {
            type: CREATE,
            payload: {
                type: gameType,
                id: gameId++,
                status: game.getStatus(),
                letters: game.getGuessedLetters(),
                wrongeCount: game.getWrongGuessCount(),
                games: gameList
            }
        }
    }
    else if (gameType == "RPS")
    {
        game = new RPS();
        newGameStarted(game);
        return {
            type: CREATE,
            payload: {
                type: gameType,
                id: gameId++,
                status: game.getStatus(),
                moves: [],
                games: gameList
            }
        }
    }
};

// Export action type constants for reducers to use
export const SUBMIT = 'SUBMIT';
export const submit = (gameId, letter) => {
    let game = games[gameId];
    result=game.guess(letter);
    if (game instanceof RPS)
    {
        return {
            type: SUBMIT,
            payload: {
                id: gameId,
                status: game.getStatus(),
                moves: result
            }
        }

    }
    else if (game instanceof Hangman) {
        return {
            type: SUBMIT,
            payload: {
                id: gameId,
                status: game.getStatus(),
                letters: game.getGuessedLetters(),
                wrongeCount: game.getWrongGuessCount()
            }
        }

    }
        
        

};

