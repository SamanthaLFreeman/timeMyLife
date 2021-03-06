import React from 'react';
import ActivityForm from './ActivityForm';
import { shallow } from 'enzyme';

describe('ActivityForm', () => {
  let wrapper;
  const setCurrentActivityMock = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
    <ActivityForm 
      setCurrentActivity={setCurrentActivityMock} />)
  })

  it('should match the snapshot with the correct data passed through', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should update the state when handle change is called', () => {
    const mockEventCategories = {
      target: {
        name: 'categories',
        value: 'Study'
      }
    };
    const mockEventName = {
      target: {
        name: 'name',
        value: 'Read'
      }
    };
    const mockEventMins = {
      target: {
        name: 'mins',
        value: '10'
      }
    };
    const mockEventSecs = {
      target: {
        name: 'secs',
        value: '30'
      }
    };
    const expectedCategory = 'Study';
    const expectedName = 'Read';
    const expectedMins = '10';
    const expectedSecs = '30';
    wrapper.instance().handleChange(mockEventCategories);
    wrapper.instance().handleChange(mockEventName);
    wrapper.instance().handleChange(mockEventMins);
    wrapper.instance().handleChange(mockEventSecs);
    expect(wrapper.state('categories')).toEqual(expectedCategory);
    expect(wrapper.state('name')).toEqual(expectedName);
    expect(wrapper.state('mins')).toEqual(expectedMins);
    expect(wrapper.state('secs')).toEqual(expectedSecs);
  });

  it('should call the setCurrentActivity method and pass through the correct info when handleSubmit is called on button click', () => {
    const mockEventCategories = {
      target: {
        name: 'categories',
        value: 'Study'
      }
    };
    const mockEventName = {
      target: {
        name: 'name',
        value: 'Read'
      }
    };
    const mockEventMins = {
      target: {
        name: 'mins',
        value: '10'
      }
    };
    const mockEventSecs = {
      target: {
        name: 'secs',
        value: '30'
      }
    };
    wrapper.instance().handleChange(mockEventCategories);
    wrapper.instance().handleChange(mockEventName);
    wrapper.instance().handleChange(mockEventMins);
    wrapper.instance().handleChange(mockEventSecs);
    const mockEvent = {
      preventDefault: jest.fn()
    };
    const currentActivityMock = {
      categories: 'Study',
      name: 'Read'
    };
    const minsMock = 10;
    const secsMock = 30;
    wrapper.instance().handleSubmit(mockEvent);
    expect(setCurrentActivityMock).toHaveBeenCalledWith(currentActivityMock, minsMock, secsMock);
  });
})