import {connect} from 'react-redux';
import CreateGameButtons from '../components/CreateGameButtons';
import {createGameRequested} from '../actions';

const mapDispatchToProps = (dispatch) => ({
  createGame: (type) => dispatch(createGameRequested(type))
});

const mapStateToProps = undefined;

export default connect(mapStateToProps, mapDispatchToProps)(CreateGameButtons);
