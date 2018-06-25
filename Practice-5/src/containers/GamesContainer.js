import {connect} from 'react-redux';
import Games from '../components/Games';
import {gameGuessRequested} from '../actions';

const mapStateToProps = (state) => {
  return ({
  games: state.games,
  fetchState: state.fetchState
  });
};

const mapDispatchToProps = (dispatch) => ({
  onGuess: (gameId, guess) => dispatch(gameGuessRequested({gameId, guess}))
});

export default connect(mapStateToProps, mapDispatchToProps)(Games);


