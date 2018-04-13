import React from 'react';
import {shallow} from 'enzyme';

import Game from '../../../src/RPS/components/Game';
import MoveHistory from '../../../src/RPS/components/MoveHistory';
import InputChangeOnSubmit from '../../../src/RPS/components/InputChangesOnSubmit';
import RPS from '../../../src/RPS/game/RPS';

describe('RPS Game', () => {
    it('renders', () => {
        expect(shallow(<Game game={new RPS()} />)).to.exist;
    });

    it('renders verified game started descendant', () => {
        let rps = new RPS();
        const rpsGame = shallow(<Game game={rps} />);
        expect(rpsGame).to.have.exactly(1).descendants(MoveHistory);
        expect(rpsGame).to.have.exactly(1).descendants(InputChangeOnSubmit);
    });
});
