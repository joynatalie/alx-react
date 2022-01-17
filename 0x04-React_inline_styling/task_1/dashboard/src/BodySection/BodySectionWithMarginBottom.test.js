import { shallow, component } from 'enzyme';
import React from 'react';
import BodySection from './BodySection.js';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom.js';

describe('crazy long name comp', () => {
  it('renders component correctly without crashing', () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title='test'>
        <p>blah blah blah</p>
      </BodySectionWithMarginBottom>
    );
    expect(wrapper.find(BodySection).props().title).toEqual('test');
    const BSection = wrapper.find(BodySection);
    const child2 = BSection.at(1);
    expect(BSection.length).toBe(1);
    expect(BSection.html()).toContain("<p>blah blah blah</p>");
  })
})