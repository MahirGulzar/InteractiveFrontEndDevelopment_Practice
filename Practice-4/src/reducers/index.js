import {
    CREATE,
    SUBMIT
} from '../actions/index.js';


const initialState = [{
        games:[]
}];

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
      case CREATE: {
          if (action.payload.type=="RPS") {
              const newGames = state.concat({
                  id: action.payload.id,
                  type: action.payload.type,
                  status: action.payload.status,
                  moves: action.payload.moves,
                  games: action.payload.games
              });
              return newGames;
          }
          else if (action.payload.type == 'Hangman') {
              const newGames = state.concat({
                  id: action.payload.id,
                  type: action.payload.type,
                  status: action.payload.status,
                  letters: action.payload.letters,
                  wrongeCount: action.payload.wrongeCount,
                  games: action.payload.games
              });
              return newGames;
          }

          break;
          
      }
      case SUBMIT: {
          
          let gameState = state.filter((gameState) =>
              state.id == action.payload.id
          );
          const newGameState = merge(gameState, action.payload)
          return Object.assign({}, state, { [gameState.id]: newGameState });

          break;
      }

  default:
    return state;
  }
};

export default gameReducer;
