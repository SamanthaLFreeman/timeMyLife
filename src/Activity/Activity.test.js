import React from 'react';
import Activity from './Activity';
import { shallow } from 'enzyme';

describe('Activity', () => {
  let wrapper;
  const activityMock = {
    category: 'Study',
    name: 'Activity name',
    mins: '1',
    secs: '30'
  }
  beforeEach(() => {
    wrapper = shallow(<Activity 
    activity={activityMock} />)
  })

  it('should match the snapshot with the correct data passed through', () => {
    expect(wrapper).toMatchSnapshot();
  })
})