
class Hangman {
    constructor() {
        this.words = ['barracuda', 'pufferfish', 'oyster', 'stringray'];
        this.randomIndex = Math.floor(Math.random() * this.words.length);
        this.guessWord = this.words[this.randomIndex];

        this.hangCount = 0;
        this.imagList = [];
        this.dashedWord = '';
        this.initialDashes = '';
        this.initGame();
    }

    initGame() {
        for (let i = 0; i < 7; i++) {
            this.imagList = this.imagList.concat('/images/' + i + '.png');
        }
        for (let i = 0; i < this.guessWord.length; i++) {
            this.dashedWord = this.dashedWord + '_';
            this.initialDashes = this.initialDashes + '_';
        }
    }

    getCurrentDashedWord() {
        return this.dashedWord;
    }

    getCurrentImage() {
        return this.imagList[this.hangCount];
    }

    checkGameOver() {
        if (this.hangCount == 6 || this.guessWord == this.initialDashes) {
            return true;
        }
        return false;
    }

    replaceValueAt(wordString, index, replacement) {
        let newString = wordString.substr(0, index) + replacement + wordString.substr(index + replacement.length);
        return newString;
    }

    checkMove(character) {
        let index = this.guessWord.search(character);
        if (index>-1) {
            // found a character
            this.guessWord = this.guessWord.replace(character, '_');
            this.dashedWord = this.replaceValueAt(this.dashedWord, index, character);
            return true;
        } else {
            this.hangCount++;
            return false;
        }
    }
}

export default Hangman;
