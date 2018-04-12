const chai = require('chai');
const chaiEnzyme = require('chai-enzyme');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const {configure} = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

global.chai = chai;// eslint disable no-undef
global.expect = chai.expect;// eslint disable no-undef
global.sinon = sinon;// eslint disable no-undef

chai.use(chaiEnzyme());
chai.use(sinonChai);

require('babel-register')({
    babelrc: false,
    presets: [
        [
            'env',
            {
                'modules': 'commonjs',
                'targets': {'node': '8.9'}
            }
        ],
        ['react']
    ],
    plugins: ['transform-object-rest-spread']
});


configure({adapter: new Adapter()});
