import React from 'react';
import PropTypes from 'prop-types';

const Footer = props => (
  <footer>
    <h1>This is the {props.footer}</h1>
  </footer>
);

Footer.propTypes = {
  footer: PropTypes.string.isRequired
}


export default Footer
//stateless functional Component
