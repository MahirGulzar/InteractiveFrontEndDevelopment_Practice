import React, {Component} from 'react';
import PropTypes from 'prop-types';

/*
    Move done by user is shown as an <h4> element in this move component
*/
class Move extends Component {
    constructor(props) {
        super(props);
    }
    render() {
      /* eslint-disable */
    return (
        <div className='move'>
            <h4 className={this.props.classType}>{this.props.text}</h4>
            {this.props.children}
      </div>
        );
        /* eslint-enable */
  }
}
Move.propTypes = {
    classType: PropTypes.string,
    text: PropTypes.string,
};
export default Move;
