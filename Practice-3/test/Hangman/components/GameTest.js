import React from 'react';
import {shallow} from 'enzyme';

import Game from '../../../src/HangMan/components/Game';
import Hangman from '../../../src/HangMan/game/Hangman';

describe('Hangman Game', () => {
    it('renders', () => {
        expect(shallow(<Game game={new Hangman()} />)).to.exist;
    });

    it('should display no input and para of instructions descendant when game is over', () => {
        let hangman = new Hangman();
        const hangManGame = shallow(<Game game={hangman} />);
        hangManGame.setState({
            dashedWord: hangman.getCurrentDashedWord(),
            currentImage: hangman.getCurrentImage(),
            gameOver: true
        });
        expect(hangManGame).to.have.exactly(0).descendants('input');
        expect(hangManGame).to.have.exactly(0).descendants('p');
        expect(hangManGame).to.have.exactly(1).descendants('img');
    });

    it('should display 1 <p> of instructions and dashed word <h3>', () => {
        let hangman = new Hangman();
        const hangManGame = shallow(<Game game={hangman} />);
        hangManGame.setState({
            dashedWord: hangman.getCurrentDashedWord(),
            currentImage: hangman.getCurrentImage(),
            gameOver: false
        });
        expect(hangManGame).to.have.exactly(1).descendants('p');
        expect(hangManGame.find('h3').text()).equals(hangman.getCurrentDashedWord());
        expect(hangManGame).to.have.exactly(1).descendants('img');
    });
});
