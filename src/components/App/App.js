import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import NavBar from '../../container/NavBar/navbar';
import Page from '../../container/page/page';

import './App.scss';

// useEffect(translation, [])

function App() {
  return (
     <div className="App">
      <NavBar />
      <Page />
    </div>
  );
}
App.propTypes = {

};

export default App;
