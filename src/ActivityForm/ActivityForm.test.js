import React from 'react';
import ActivityForm from './ActivityForm';
import { shallow } from 'enzyme';

describe('ActivityForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ActivityForm />)
  })

  it('should match the snapshot with the correct data passed through', () => {
    expect(wrapper).toMatchSnapshot();
  })
})