import Hangman from '../../src/HangMan/game/Hangman';

let chai = require('chai');
let assert = chai.assert;// Using Assert style

describe('Hangman', () => {
    let game;
    beforeEach(() => {
        game = new Hangman();
    });
    describe('#checkMove()', function() {
        it('should return true for right guess', function() {
            let word = game.guessWord;
            assert(game.checkMove(word[0]));
        });
        it('should return false for wronge guess', function() {
            assert(!game.checkMove('x'));
        });
    });
    describe('#checkGameOver()', function() {
        game = new Hangman();// Reset game
        it('should return false when game is not finished', function() {
            assert(!game.checkGameOver());
        });
        it('should return true when game is finished by wronge 6 guesses', function() {
            for (let i = 0; i < 6; i++) {
               game.checkMove('x');
            }
            assert(game.checkGameOver());
        });
        it('should return true when game is finished by correct guess', function() {
            game = new Hangman();// Reset game
            for (let i = 0; i < game.guessWord.length; i++) {
                game.checkMove(game.guessWord[i]);
            }
            assert(game.checkGameOver());
        });
    });
});
