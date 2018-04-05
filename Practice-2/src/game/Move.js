import React, {Component} from 'react';

/*
 
*/
class Move extends Component {
    constructor(props) {
        super(props);
     
    }
  render() {
    return (
        <div className='move'>
            <h4 className={this.props.classType}>{this.props.text}</h4>
            {this.props.children}
      </div>
    );
  }
}

export default Move;
