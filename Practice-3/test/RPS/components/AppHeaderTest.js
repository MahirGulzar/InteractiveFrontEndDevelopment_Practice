import React from 'react';
import {shallow} from 'enzyme';

import Header from '../../../src/RPS/components/AppHeader';

describe('RPS AppHeader', () => {
    it('renders', () => {
        expect(shallow(<Header />)).to.exist;
    });
});
