const chai = require('chai');

global.chai = chai;// eslint-disable-line no-undef
global.expect = chai.expect;// eslint-disable-line no-undef

require('babel-register')({
  babelrc: false,
  presets: [
    [
      'env',
      {
        'modules': 'commonjs',
        'targets': {'node': '8.10'}
      }
    ]
  ]
});
