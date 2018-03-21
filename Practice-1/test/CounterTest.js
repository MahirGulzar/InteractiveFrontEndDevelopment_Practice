import Counter from '../src/Counter';

let chai = require('chai');// eslint-disable-line no-undef
let assert = chai.assert;// Using Assert style
describe('Counter', function () {// eslint-disable-line no-undef
    describe('#getCount()', function () {// eslint-disable-line no-undef
        let counter = new Counter();
        it('should return 0 before increment', function () {// eslint-disable-line no-undef
            assert(counter.getCount==0)
        });
    });
    describe('#increase()', function () {// eslint-disable-line no-undef
        let counter = new Counter();
        counter.increase();
        it('should return 1 after an increment', function () {// eslint-disable-line no-undef
            assert(counter.getCount == 1)
        });
    }); 
    
});
