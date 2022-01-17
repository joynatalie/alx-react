import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils/utils';
import React from 'react';

function Footer() {
  return (
    <>
      <hr className="hr" />
      <footer className="App-footer">Copyright {getFullYear()} - {getFooterCopy(true)}</footer>
    </>
  );
}

export default Footer;
