export const GAME_CREATED_REQUESTED= 'GAME_CREATED_REQUESTED';
export const createGameRequested=(type)=>{
  return {
    type: GAME_CREATED_REQUESTED,
    payload: {
      type: type
    }
  };
};

export const GAME_CREATED_SUCCEEDED = 'GAME_CREATED_SUCCEEDED';
export const createGameSucceeded = (response) => ({
  type: GAME_CREATED_SUCCEEDED,
  payload: response
});

export const GAME_CREATED_FAILED = 'GAME_CREATED_FAILED';
export const createGameFailed = (reason) => ({
  type: GAME_CREATED_FAILED,
  payload: reason
});

export const GAME_MOVE_DESIRED = 'GAME_MOVE_DESIRED';
export const gameGuessRequested = ({gameId, guess}) => {
  return {
    type: GAME_MOVE_DESIRED,
    payload: {
      id: gameId,
      guess: guess
    }
  };
};

export const GAME_MOVE_FAILED = 'GAME_MOVE_FAILED';
export const gameGuessFailed = (reason) => {
  return {
    type: GAME_MOVE_FAILED,
    payload: reason
  };
};

export const GAME_MOVE_COMPLETED = 'GAME_MOVE_COMPLETED';
export const gameGuessSucceeded = (response) => {
  return {
    type: GAME_MOVE_COMPLETED,
    payload: response
  };
};
