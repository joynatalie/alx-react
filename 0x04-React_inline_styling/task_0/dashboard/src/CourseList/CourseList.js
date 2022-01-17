import React from 'react';
import './CourseList.css';
import CourseListRow from './CourseListRow.js';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape.js';

function CourseList({ listCourses }) {
  return (
    <table id='CourseList'>
      <thead className="table-title">
        <CourseListRow textFirstCell="Available Courses" isHeader={true} />
        <CourseListRow textFirstCell="CourseName" textSecondCell="Credit" isHeader={true} />
      </thead>
      <tbody>
        { listCourses.length > 0
          ? listCourses.map(({ id, name, credit }) => (
            <CourseListRow textFirstCell={name} textSecondCell={credit} key={id} />
          ))
          : <CourseListRow textFirstCell='No course available yet' />
        }
      </tbody>
    </table>
  );
};

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape)
};

CourseList.defaultProps = {
  listCourses: []
};

export default CourseList;