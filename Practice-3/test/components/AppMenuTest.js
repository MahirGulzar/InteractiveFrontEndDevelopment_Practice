import React from 'react';
import {shallow} from 'enzyme';

import Header from '../../src/components/AppMenu';

describe('App AppMenu', () => {
    it('renders', () => {
        const onSubmit = sinon.spy();
        expect(shallow(<Header gameAdd={onSubmit} />)).to.exist;
    });

    it('it should have two buttons and one header descendants with specific text', () => {
        const onSubmit = sinon.spy();
        const header = shallow(<Header gameAdd={onSubmit}/>);
        expect(header).to.have.exactly(2).descendants('button');
        expect(header).to.have.exactly(1).descendants('h1');
        expect(header.find('button[className="rps-create"]').text()).to.equal('Create RPS-Game');
        expect(header.find('button[className="hangman-create"]').text()).to.equal('Create Hangman-Game');
    });
});
