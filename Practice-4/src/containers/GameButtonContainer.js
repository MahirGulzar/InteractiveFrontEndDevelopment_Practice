import { connect } from 'react-redux';

import CreateGameButtons from '../components/CreateGameButtons';
import { create } from '../actions';

const mapDispatchToProps = (dispatch) => ({
    create: (gameType) => dispatch(create(gameType))
});

const mapStateToProps = undefined; // no state required

export default connect(mapStateToProps, mapDispatchToProps)(CreateGameButtons);