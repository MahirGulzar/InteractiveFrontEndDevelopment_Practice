import React from 'react';
import {shallow} from 'enzyme';

import RPSApp from '../../../src/RPS/container/App';
import RPSHeader from '../../../src/RPS/components/AppHeader';
import RPSGame from '../../../src/RPS/components/Game';
import RPS from '../../../src/RPS/game/RPS';

describe('RPS App', () => {
    it('renders', () => {
        expect(shallow(<RPSApp game={new RPS()} />)).to.exist;
    });

    it('should have one descendant of header and Game', () => {
        let rps = new RPS();
        const app = shallow(<RPSApp game={rps} />);
        expect(app).to.have.exactly(1).descendants(RPSHeader);
        expect(app).to.have.exactly(1).descendants(RPSGame);
    });
});
