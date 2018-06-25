import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  GAME_CREATED_REQUESTED,
  gameGuessRequested,
  GAME_MOVE_DESIRED,
  createGameRequested,
  GAME_CREATED_FAILED,
} from '../../src/actions/index';
import {
  postGameRequest
} from '../../src/middleware/GameServerMiddleware';

describe('createGame', () => {
  context('when game is created', () => {
    const middlewares = [thunk];
    const createMockStore = configureStore(middlewares);
    let store;
    let fetch;

    beforeEach(() => {
      const initialState = {};
      store = createMockStore(initialState);

      fetch = sinon.stub();
      fetch.returns(Promise.resolve({}));
    });

    it('dispatches game guess requested', () => {
      store.dispatch(gameGuessRequested('hangman', fetch));

      expect(store.getActions()[0]).to.deep.contain({
        type: GAME_MOVE_DESIRED,
        payload: {
          guess: undefined,
          id: undefined
        }
      });
    });

    it('dispatches create game requested', () => {
      store.dispatch(createGameRequested('hangman', fetch));

      expect(store.getActions()[0]).to.deep.contain({
        type: GAME_CREATED_REQUESTED,
        payload: {
          type: 'hangman'
        }
      });
    });

    it('dispatches game create failed when fetch fails', () => {
      fetch.returns(Promise.reject({error: 'error'}));

      return store.dispatch(postGameRequest('hangman', fetch))
        .catch(() => {
          expect(store.getActions()).to.deep.contain({
            type: GAME_CREATED_FAILED,
            payload: {error: 'error'}
          });
        });
    });
  });
});
