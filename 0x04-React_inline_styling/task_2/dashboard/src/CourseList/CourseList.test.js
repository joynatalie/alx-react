import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow.js';
import CourseList from './CourseList.js';

describe('CourseList component', () => {
  it('renders the CourseList with crashing', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find(CourseListRow)).toHaveLength(3);
  });
  it('renders courselist array correctly when passed', () => {
    const listCourses = [
      {id: 1, name: 'ES6', credit: 60},
      {id: 2, name: 'Webpack', credit: 20},
      {id: 3, name: 'React', credit: 40}
    ];
    const wrapper = shallow(<CourseList listCourses={listCourses} />);
    expect(wrapper.find(CourseListRow)).toHaveLength(5);
  })
});