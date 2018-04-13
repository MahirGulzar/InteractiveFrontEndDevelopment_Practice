import React from 'react';
import {shallow} from 'enzyme';

import InputField from '../../../src/HangMan/components/InputChangesOnSubmit';

describe('Hangman Input', () => {
  it('renders', () => {
      expect(shallow(
          <InputField onSubmit={sinon.stub()} type='text' maxLength={1} />
    )).to.exist;
  });

  it('has one input', () => {
      const form = shallow(<InputField onSubmit={sinon.stub()} type='text' maxLength={1} />);
      expect(form).to.have.exactly(1).descendants('input');
  });

  // Testing callbacks and the arguments that callbacks receive is generally
  // very useful.
  it('calls submit with value when onKeyUp event is triggered', () => {
      const onSubmit = sinon.spy();
      const form = shallow(<InputField onSubmit={onSubmit} type='text' maxLength={1} />);

      form.setState({value: 'p'});
      form.find('input').simulate('keyUp', {keyCode: 40});
  });
});

