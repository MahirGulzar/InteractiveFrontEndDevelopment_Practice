import React from 'react';
import PropTypes from 'prop-types';
import Move from './Move';

/*
    MoveList pure-function holds the list of moves i.e maps every move to <Move>
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
MoveList.propTypes = {
  moves: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    classType: PropTypes.string,
    id: PropTypes.number
    }))
};

export default MoveList;
