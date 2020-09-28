import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../Home/Home';
import Contact from '../Contact/Contact';

const Page = ({ selectedLanguage, homeMessage, contactMessage }) => {
  
  console.log('page component', homeMessage, contactMessage)
  
  return (
  <div className='page'>
     {selectedLanguage === "Français" && (
        <>
          <Route path="/home" exact>
            <Home text={homeMessage.fr} />
          </Route>
          <Route path="/contact" exact >
            <Contact text={contactMessage.fr} />
          </Route>
        </>
      )}
      {selectedLanguage === "English" && (
        <>
          <Route path="/home" exact>
            <Home text={homeMessage.en} />
          </Route>
          <Route path="/contact" exact >
            <Contact text={contactMessage.en} />
          </Route>
        </>
      )}  
  </div>
)};
export default Page;
