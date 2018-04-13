import React from 'react';
import {shallow} from 'enzyme';
import App from '../../src/container/App';
import AppMenu from '../../src/components/AppMenu';
import GameList from '../../src/container/GameList';


describe('App', () => {
    it('renders', () => {
        expect(shallow(<App/>)).to.exist;
    });

    it('it should have one descendant of AppMenu and GameList', () => {
        const app = shallow(<App />);
        expect(app).to.have.exactly(1).descendants(AppMenu);
        expect(app).to.have.exactly(1).descendants(GameList);
    });
});
