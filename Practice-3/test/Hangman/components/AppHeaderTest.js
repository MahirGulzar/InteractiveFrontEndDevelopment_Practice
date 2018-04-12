import React from 'react';
import {shallow} from 'enzyme';

import Header from '../../../src/HangMan/components/AppHeader';

describe('Hangman AppHeader', () => {
    it('renders', () => {
        // App Header component has no logic or control flow. There isn't much
        // point to test the exact markup that it outputs.
        expect(shallow(<Header />)).to.exist;
    });
});
