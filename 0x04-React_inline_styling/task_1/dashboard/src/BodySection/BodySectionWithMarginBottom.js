import React, { Component } from 'react';
import BodySection from './BodySection.js';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';

const BodySectionWithMarginBottom = (props) => {
  return (
    <div className={css(styles.BodySectionMB)}>
      <BodySection {...props} />
    </div>
  )
}

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element
}

const styles = StyleSheet.create({
  BodySectionMB: {
    margin: '1rem'
  },
});

export default BodySectionWithMarginBottom