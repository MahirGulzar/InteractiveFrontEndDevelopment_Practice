import React from 'react';
import {shallow} from 'enzyme';

import HangManApp from '../../../src/HangMan/container/App';
import HangmanHeader from '../../../src/HangMan/components/AppHeader';
import HangmanGame from '../../../src/HangMan/components/Game';
import Hangman from '../../../src/HangMan/game/Hangman';

describe('Hangman App', () => {
    it('renders', () => {
        expect(shallow(<HangManApp game={new Hangman()} />)).to.exist;
    });

    it('should have one descendant of header and Game', () => {
        let hangman = new Hangman();
        const app = shallow(<HangManApp game={hangman} />);
        expect(app).to.have.exactly(1).descendants(HangmanHeader);
        expect(app).to.have.exactly(1).descendants(HangmanGame);
    });
});
