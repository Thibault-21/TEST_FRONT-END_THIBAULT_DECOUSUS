import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = ({
  languages,
  selectedOnLanguage 
}) => (
    <Navbar bg="primary" variant="dark">        
        <Nav className="mr-auto">
        <Nav.Link as={Link} to="/home"> Accueil </Nav.Link>    
        <Nav.Link as={Link} to="/contact"> Contact </Nav.Link>    
          <NavDropdown title="Lang" id="nav-dropdown"> 
            {languages.map((lang) => {
              return (
                <NavDropdown.Item
                  key={lang.id}
                  eventKey={lang.id}
                  onSelect={() => selectedOnLanguage(lang.name)}
                  exact
                >
                  {lang.name}
                </NavDropdown.Item>
            )})}
          </NavDropdown>            
        </Nav>
    </Navbar>
  );
  
NavBar.propTypes = {
  languages: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      }).isRequired,
  ).isRequired,
  selectedOnLanguage: PropTypes.func.isRequired,
};

export default NavBar;
