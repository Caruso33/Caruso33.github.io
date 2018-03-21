import React from 'react';
import PropTypes from 'prop-types';
import './Footer.css';

const Footer = props => (
  <footer>
    <h4>Created by Tobi Bobi</h4>
  </footer>
);

Footer.propTypes = {
  footer: PropTypes.string.isRequired
}


export default Footer
//stateless functional Component
