import React from 'react';
import PropTypes from 'prop-types';

const Home = ({ text }) => (
  <div className='home'>
    <h1>{text}</h1>
  </div>
);
Home.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Home;
