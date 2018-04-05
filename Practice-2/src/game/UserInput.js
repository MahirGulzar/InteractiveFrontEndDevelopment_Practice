import React, {Component} from 'react';
import PropTypes from 'prop-types';

/*
  UserInput handles all the inputs from users and performs related actions and checks
*/
class UserInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
        userMove: ''
    };
  }
  handleMoveChange(event) {
      let eventVal = event.target.value.toUpperCase();
      if (eventVal == 'R' || eventVal == 'P' || eventVal == 'S') {
          this.setState({userMove: eventVal});
      }
  }
  onEnter(e) {
      if (e.key == 'Enter' && this.state.userMove !='') {
          this.props.onEnter({userMove: this.state.userMove});// eslint-disable-line react/prop-types
          this.setState({userMove: ''});
      }
  }
  render() {
      const fieldType = this.props.isHidden ? 'hidden' : 'text';// eslint-disable-line react/prop-types
      return (
      <div className='user-input'>
        <input
            maxLength={1}
            type={fieldType}
            placeholder="Your Choice"
            value={this.state.userMove}
            onChange={this.handleMoveChange.bind(this)}
            onKeyPress={this.onEnter.bind(this)}
        />
      </div>
    );
  }
}
UserInput.propTypes = {
    userMove: PropTypes.string,
};
export default UserInput;
