import React from 'react';
import PastActivities from './PastActivities';
import { shallow } from 'enzyme';

describe('PastActivities', () => {
  let wrapper;
  const activitiesMock = [{
    category: 'Study',
    name: 'Activity name',
    mins: '1',
    secs: '30'
  }]

  beforeEach(() => {
    wrapper = shallow(
    <PastActivities 
      activities={activitiesMock}/>)
  })

  it('should match the snapshot with the correct data passed through', () => {
    expect(wrapper).toMatchSnapshot();
  })
})