import React, { Fragment, useContext, useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import ContactContext from '../../context/contact/contactContext';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';



const NavStrap = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="primary" dark expand="md">
      <NavbarToggler onClick={toggle} />
      <NavbarBrand href="/">VacTrack</NavbarBrand>
      <Collapse isOpen={isOpen} navbar>
        <Nav className="rightNav ml-auto" navbar>
          <NavItem className='custNav'>
            <Button className="btn" size="sm"><NavLink className='custNav' href="/oeas">Resources</NavLink></Button>
          </NavItem>

          <NavItem className='custNav'>
            <Button color='primary' size="sm"><NavLink className='custNav' href="/vaccines">Vaccinations</NavLink></Button>
          </NavItem>

          <NavItem className='custNav'>
            <Button color='primary' size="sm"><NavLink className='custNav' href="/blog">Blog</NavLink></Button>
          </NavItem>

          <NavItem className='custNav'>
            <Button color='primary' size="sm"><NavLink className='custNav' href="/register">Register</NavLink></Button>
          </NavItem>

          <NavItem className='custNav'>
            <Button color='primary' size="sm"><NavLink className='custNav' href="/login">Login</NavLink></Button>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default NavStrap;