import React from 'react';
import PropTypes from 'prop-types';

const Contact = ( {text} ) => (
  <div className='contact'>
    <h1>{text}</h1>
  </div>
);

Contact.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Contact;
