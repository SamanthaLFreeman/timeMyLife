import React from 'react';
import Timer from './Timer';
import { shallow } from 'enzyme';

describe('Timer', () => {
  let wrapper;
  const currentActivityMock = {
    name: 'Activity Name'
  }
  const minsMock = '1'
  const secsMock = '30'
  const startTimerMock = jest.fn()
  const removeCurrentActivityMock = jest.fn()

  beforeEach(() => {
    wrapper = shallow(
      <Timer 
        removeCurrentActivity={removeCurrentActivityMock}
        currentActivity={currentActivityMock}
        mins={minsMock}
        secs={secsMock}
        startTimer={startTimerMock} />)
  })

  it('should match the snapshot with the correct data passed through', () => {
    expect(wrapper).toMatchSnapshot();
  })
})