import React from 'react';
import {shallow, render} from 'enzyme';

import Move from '../../../src/RPS/components/Move';

describe('RPS MOVE', () => {
  it('renders', () => {
    expect(shallow(
        <Move guess='ROCK' opposition='SCISSORS' result='WIN' index={1}/>
    )).to.exist;
    });

  it('renders div that includes the game results', () => {
      expect(
          render(<Move guess='ROCK' opposition='SCISSORS' result='WIN' index={1}/>).html()
      ).to.contain('<p>You guessed <i>ROCK</i> which won against <i>SCISSORS</i></p>');
  });

});
