import React from 'react';
import PropTypes from 'prop-types';
import Move from './Move';

/*

*/
const MoveList = (props) => {
  const moveElements = props.moves.map((move) => {
      return (
          <Move classType={move.classType} key={move.id} text={move.text}/>
    );
  });
  return (
    <div className="move-list">
          {moveElements}
    </div>
  );
};

//CommentList.propTypes = {
//  comments: PropTypes.arrayOf(PropTypes.shape({
//    text: PropTypes.string,
//    classType: PropTypes.string,
//    id: PropTypes.number

//  })).isRequired
//};

export default MoveList;
