import React from 'react';
import {shallow} from 'enzyme';

import Header from '../../../src/HangMan/components/AppHeader';

describe('Hangman AppHeader', () => {
    it('renders', () => {
        expect(shallow(<Header />)).to.exist;
    });
});
