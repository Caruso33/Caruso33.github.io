import React from 'react';
import PropTypes from 'prop-types';

const Footer = props => (
  <h1>This is the {props.footer}</h1>
);

Footer.propTypes = {
  footer: PropTypes.string.isRequired
}


export default Footer
//stateless functional Component
