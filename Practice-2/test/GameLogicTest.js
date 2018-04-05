import GameLogic, {OUTCOME} from '../src/game/GameLogic';

let chai = require('chai');// eslint-disable-line no-undef
let assert = chai.assert;// Using Assert style

describe('GameLogic', function() {// eslint-disable-line no-undef
    describe('#nextMove()', function() {// eslint-disable-line no-undef
        let gameLogic = new GameLogic();
        it('should return a valid move i.e \'R\' \'P\' \'S\' ', function() {// eslint-disable-line no-undef
            assert(gameLogic.nextMove() == gameLogic.moves[0]
                || gameLogic.nextMove() == gameLogic.moves[1]
                || gameLogic.nextMove() == gameLogic.moves[2]);
        });
    });
    describe('#checkMove()', function() {// eslint-disable-line no-undef
        let gameLogic = new GameLogic();
        gameLogic.nextMove();
        it('given an input it should return a valid game decision i.e \'WON\' \'TIED\' \'LOST\' ', function() {// eslint-disable-line no-undef
            assert(gameLogic.checkMove('R') == OUTCOME.WON
                || gameLogic.checkMove('R') == OUTCOME.LOST
                || gameLogic.checkMove('R') == OUTCOME.TIED);
        });
    });
    describe('#checkMove()', function() {// eslint-disable-line no-undef
        let gameLogic = new GameLogic();
        it('given \'R\' with nextMove not called, it should return \'TIED\' ', function() {// eslint-disable-line no-undef
            assert(gameLogic.checkMove('R') == OUTCOME.TIED);
        });
    });
    describe('#checkMove()', function() {// eslint-disable-line no-undef
        let gameLogic = new GameLogic();
        it('given \'P\' with nextMove not called, it should return \'WON\' ', function() {// eslint-disable-line no-undef
            assert(gameLogic.checkMove('P') == OUTCOME.WON);
        });
    });
    describe('#checkMove()', function() {// eslint-disable-line no-undef
        let gameLogic = new GameLogic();
        it('given \'S\' with nextMove not called, it should return \'LOST\' ', function() {// eslint-disable-line no-undef
            assert(gameLogic.checkMove('S') == OUTCOME.LOST);
        });
    });
});
