const chai = require('chai');// eslint-disable-line no-undef
global.expect = chai.expect;// eslint-disable-line no-undef

require('babel-register')({// eslint-disable-line no-undef
  babelrc: false,
  presets: [
    [
      'env',
      {
        'modules': 'commonjs',
        'targets': {'node': '8.9'}
      }
    ]
  ],
  plugins: ['transform-object-rest-spread']
});
