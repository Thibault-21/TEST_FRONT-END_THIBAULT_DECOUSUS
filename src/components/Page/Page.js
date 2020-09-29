import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../Home/Home';
import Contact from '../Contact/Contact';

const Page = ({ 
  selectedLanguage, 
  homeMessage, 
  contactMessage 
}) => (
    <div className='page'>
       {selectedLanguage === "Français" 
        ?
          <>
            <Route path="/home" exact>
              <Home text={homeMessage.fr} />
            </Route>
            <Route path="/contact" exact >
              <Contact text={contactMessage.fr} />
            </Route>
          </>
        :
          <>
            <Route path="/home" exact>
              <Home text={homeMessage.en} />
            </Route>
            <Route path="/contact" exact >
              <Contact text={contactMessage.en} />
            </Route>
          </>
        }
    </div>
  );
export default Page;
