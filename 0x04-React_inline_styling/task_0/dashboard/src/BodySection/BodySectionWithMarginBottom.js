import React, { Component } from 'react';
import BodySection from './BodySection.js';
import './BodySectionWithMarginBottom.css';
import PropTypes from 'prop-types';

const BodySectionWithMarginBottom = (props) => {
  return (
    <div className="bodySectionWithMargin">
      <BodySection {...props} />
    </div>
  )
}

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element
}
export default BodySectionWithMarginBottom