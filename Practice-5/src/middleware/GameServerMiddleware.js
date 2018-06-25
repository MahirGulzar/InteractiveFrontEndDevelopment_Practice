
import {
  createGameSucceeded,
  createGameFailed,
  gameGuessSucceeded,
  gameGuessFailed,
  GAME_CREATED_REQUESTED,
  GAME_MOVE_DESIRED,
} from '../actions';

const SERVER_ADDRESS = 'http://localhost:8081';

export const postGameRequest = (type, fetch = window.fetch) => {
  type=type.toLowerCase().trim();
  return (dispatch) => {
    return fetch(
      SERVER_ADDRESS + '/games',
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({type})
      },
    ).then((response) => {
      if (response.ok) {
        response.json().then(
          (myResponse) => dispatch(createGameSucceeded(myResponse)),
          (error) => dispatch(createGameFailed({error: 'Unparseable response'}))
        );
      } else {
        response.json().then(
          ({error}) => dispatch(createGameFailed({error: error})),
          (error) => dispatch(createGameFailed({error: 'Unparseable response'}))
        );
      }
    }).catch((error) => {
      dispatch(dispatch(createGameFailed({error: 'Service unreachable'})));
    });
  };
};


export const postGuessRequest = (id, guess, fetch = window.fetch) => {
  return (dispatch) => {
    return fetch(
      SERVER_ADDRESS + '/games/'+id+'/moves',
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({guess})
      },
    ).then((response) => {
      if (response.ok) {
        response.json().then(
          (myResponse) => dispatch(gameGuessSucceeded(myResponse)),
          (error) => dispatch(gameGuessFailed({error: 'Unparseable response'}))
        );
      } else {
        response.json().then(
          ({error}) => dispatch(gameGuessFailed({error: error})),
          (error) => dispatch(gameGuessFailed({error: 'Unparseable response'}))
        );
      }
    }).catch((error) => {
      dispatch(dispatch(gameGuessFailed({error: 'Service unreachable'})));
    });
  };
};

const gameServerMiddleware = (store) => (next) => {
  return (action) => {
    if (action.type === GAME_CREATED_REQUESTED) {
      store.dispatch(postGameRequest(action.payload.type));
    } else if (action.type === GAME_MOVE_DESIRED) {
      store.dispatch(postGuessRequest(action.payload.id, action.payload.guess));
    }
    return next(action);
  };
};

export default gameServerMiddleware;
