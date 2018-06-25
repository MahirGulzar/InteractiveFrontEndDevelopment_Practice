import {GAME_CREATED_REQUESTED,
  GAME_CREATED_FAILED,
  GAME_CREATED_SUCCEEDED,
  GAME_MOVE_DESIRED,
  GAME_MOVE_FAILED,
  GAME_MOVE_COMPLETED
} from '../actions';

const initialState = {
  games: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GAME_CREATED_REQUESTED: {
      return {...state, fetchState: {inFlight: true}};
    }
    case GAME_CREATED_FAILED: {
      return {...state, fetchState: {inFlight: false, error: action.payload}};
    }
    case GAME_CREATED_SUCCEEDED: {
          const newState={
            games: state.games.concat(action.payload),
            fetchState: {inFlight: false}
          };
      return Object.assign({}, state, newState);
    }
    case GAME_MOVE_DESIRED: {
      return {...state, fetchState: {inFlight: true}};
    }
    case GAME_MOVE_FAILED: {
      return {...state, fetchState: {inFlight: false, error: action.payload}};
    }
    case GAME_MOVE_COMPLETED: {
      const gameId=action.payload.id;
      let newState=state;
      let currentGame = state.games.find((x) => x.id === gameId);
      let index = state.games.findIndex((x) => x.id==gameId);
      let mergedObject=Object.assign({}, currentGame, action.payload);
      newState.games[index]=mergedObject;
      newState={
        games: newState.games,
        fetchState: {inFlight: false}
      };

      return Object.assign({}, state, newState);
    }
  }
  return state;
};

export default reducer;
