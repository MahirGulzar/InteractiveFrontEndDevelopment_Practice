import React, {Component} from 'react';
import PropTypes from 'prop-types';

/*
  
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
      if (eventVal =='R' || eventVal == 'P' || eventVal == 'S')
          this.setState({ userMove: eventVal });
  }

  onEnter(e) {
      if (e.key == 'Enter' && this.state.userMove !='') {
          this.props.onEnter({ userMove: this.state.userMove });
          this.setState({ userMove:""})
      }
  }

  render() {
      const fieldType = this.props.isHidden ? 'hidden' : 'text';
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

export default UserInput;
