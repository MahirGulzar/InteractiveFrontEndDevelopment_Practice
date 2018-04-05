export const OUTCOME = {
    WON: 'WON',
    TIED: 'TIED',
    LOST: 'LOST'
};
/*
    GameLogic holds the core game logic, check user moves and gives Outcomes by user moves
*/
export default class GameLogic {
    constructor() {
        this.moves = ['R', 'P', 'S'];
        this.currentIndex = 0;
        this.movesCounter = 0;
    }
    // Get next random move
    nextMove() {
        let rand = Math.floor(Math.random() * (this.moves.length));
        this.currentIndex = rand;
        this.movesCounter++;
        return this.moves[rand];
    }
    // Check user's move
    checkMove(input) {
        if (input == this.moves[this.currentIndex]) {
            return OUTCOME.TIED;
        }
        else {
            if (input == 'R' && this.moves[this.currentIndex] == 'S') {
                return OUTCOME.WON;
            }
            else if (input == 'R' && this.moves[this.currentIndex] == 'P') {
                return OUTCOME.LOST;
            }
            else if (input == 'S' && this.moves[this.currentIndex] == 'R') {
                return OUTCOME.LOST;
            }
            else if (input == 'S' && this.moves[this.currentIndex] == 'P') {
                return OUTCOME.WON;
            }
            else if (input == 'P' && this.moves[this.currentIndex] == 'R') {
                return OUTCOME.WON;
            }
            else if (input == 'P' && this.moves[this.currentIndex] == 'S') {
                return OUTCOME.LOST;
            }
        }
    }
    // Get full name w.r.t key e.g 'R'=ROCK
    getName(key) {
        if (key == 'R') {
            return 'ROCK';
        }
        else if (key == 'P') {
            return 'PAPER';
        }
        else if (key == 'S') {
            return 'SCISSORS';
        }
    }
}
