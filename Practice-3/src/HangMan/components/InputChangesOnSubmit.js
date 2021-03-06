import React, {Component} from 'react';
import PropTypes from 'prop-types';

class InputChangesOnSubmit extends Component {
  constructor(props) {
    super(props);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = {value: ''};
  }

  onChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  onKeyUp(event) {
    if (event.keyCode === 13) {
      const submissionValue = this.state.value;
      this.setState({value: ''});
      this.props.onSubmit(submissionValue);
    }
  }

  render() {
    return (
        <input
            className='HangMan-input'
        type={this.props.type}
        maxLength={this.props.maxLength}
        onKeyUp={this.onKeyUp}
        value={this.state.value}
        onChange={this.onChange}
        size='4'
      />
    );
  }
}

InputChangesOnSubmit.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  maxLength: PropTypes.number.isRequired
};

export default InputChangesOnSubmit;
