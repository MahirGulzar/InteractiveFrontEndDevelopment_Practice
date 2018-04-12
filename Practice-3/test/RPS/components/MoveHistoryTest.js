import React from 'react';
import {shallow} from 'enzyme';

import MoveHistory from '../../../src/RPS/components/MoveHistory';
import Move from '../../../src/RPS/components/Move';

describe('MoveHistory', () => {
  // Any collection-like component should have a test for the empty case
  it('renders no Move components without moves', () => {
      expect(shallow(<MoveHistory moves={[]} />))
      .to.not.contain.descendants(Move);
  });

  // It is useful to test that child Components are created with correct props
  it('renders Move component for each move', () => {
    const moves = [
        { guess: 'ROCK', opposition: 'SCISSORS', result: 'WIN', index: 1 },
        { guess: 'SCISSORS', opposition: 'ROCK', result: 'LOSS', index: 1 },
    ];

    const moveHistory = shallow(<MoveHistory moves={moves} />);

    expect(moveHistory).to.have.exactly(2).descendants(Move);
    expect(moveHistory).to.contain(<Move guess='ROCK' opposition='SCISSORS' result='WIN' />);
    expect(moveHistory).to.contain(<Move guess='SCISSORS' opposition='ROCK' result='LOSS' />);

  });
});

