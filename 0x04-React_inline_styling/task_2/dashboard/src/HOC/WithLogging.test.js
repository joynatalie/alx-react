import React, { Component } from 'react';
import { shallow } from 'enzyme';
import WithLogging from './WithLogging.js';

describe('HOC components - WithLogging', () => {
  it('calls console.log on mount and unmount with Component when the wrapped element is pure HTML', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    const ComponentVar = WithLogging(Component);
    const wrapper = shallow(<ComponentVar />)
    expect(consoleSpy).toBeCalledTimes(1);
    wrapper.unmount();
    expect(consoleSpy).toBeCalledTimes(2);
    consoleSpy.mockRestore();
  })

  it('was called on mount and on unmount with the name of the component when the wrapped element is the Login component', () => {
    const ComponentVar = WithLogging('Login');
    const consoleSpy = jest.spyOn(console, 'log');
    const wrapper = shallow(<ComponentVar />)
    expect(consoleSpy).toBeCalledWith(`Component Login is mounted`);
    wrapper.unmount();
    expect(consoleSpy).toBeCalledWith(`Component Login is going to unmount`);
    consoleSpy.mockRestore();
  });
});