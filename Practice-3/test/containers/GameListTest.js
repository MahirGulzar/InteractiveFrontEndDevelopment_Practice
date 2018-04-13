import React from 'react';
import {shallow} from 'enzyme';

import GameList from '../../src/container/GameList';
import HangManApp from '../../src/HangMan/container/App';
import RPSApp from '../../src/RPS/container/App';
import RPS from '../../src/RPS/game/RPS';

describe('App GameList', () => {
    // Any collection-like component should have a test for the empty case
    it('renders no Game components without gameList', () => {
        expect(shallow(<GameList GameList={[]} />))
            .to.not.contain.descendants(RPSApp);
        expect(shallow(<GameList GameList={[]} />))
            .to.not.contain.descendants(HangManApp);
    });
    it('renders RPSApp as a descendant when a RPS object is passed as prop', () => {
        let rpsObject = new RPS();
        // I did passed the id here but its still giving a warning in tests for prop validation below
        let gamelist = [{game: rpsObject, id: 1}];
        const gameListComp = shallow(<GameList GameList={gamelist} />);
        expect(gameListComp).to.have.exactly(1).descendants(RPSApp);
    });
});

