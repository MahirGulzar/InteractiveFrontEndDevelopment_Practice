import reducer from '../../src/reducers';

import {
  createGameRequested,
  createGameSucceeded,
  createGameFailed,
  gameGuessRequested,
} from '../../src/actions/index';

describe('Games Reducer', () => {
  it('has no games or pending request initially', () => {
    expect(reducer(undefined, {})).to.eql({games: []});
  });

  it('sets request in flight when create game requested', () => {
    expect(
      reducer(undefined, createGameRequested('rps'))
    ).to.eql({
      games: [],
      fetchState: {inFlight: true}
    });
  });
  it('sets comments when create game  request succeeds', () => {
    const initialState = reducer(undefined, createGameRequested());
    expect(
      reducer(initialState, createGameSucceeded(['game']))
    ).to.eql({
      games: ['game'],
      fetchState: {inFlight: false}
    });
  });

  it('sets error when game create request fails', () => {
    const initialState = reducer(undefined, createGameRequested());
    expect(
      reducer(initialState, createGameFailed('error'))
    ).to.eql({
      games: [],
      fetchState: {inFlight: false, error: 'error'}
    });
  });

  it('adds in-flight comment when game move is guessed', () => {
    const guess = {gameId: 1, guess: 'R'};
    const requestAction = gameGuessRequested(guess);
    expect(reducer(undefined, requestAction)).to.eql({
      games: [],
      fetchState: {inFlight: true}
    });
  });
});
