import React, { Fragment, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
// import ContactContext from '../../context/contact/contactContext';
import VaccineContext from '../../context/vaccinations/vaccineContext';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';



export const Navbar_rs = ({ props, title, icon }) => {
  const [isOpen, setIsOpen] = useState(false);
  const authContext = useContext(AuthContext);
  const vaccineContext = useContext(VaccineContext);

  const { isAuthenticated, logout, user, loadUser } = authContext;
  const { clearVaccines } = vaccineContext;

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    loadUser();
  }, []);

  const onLogout = () => {
    logout();
    clearVaccines();
  };

  const authLinks = (
    <Fragment>
      <Navbar color="primary" dark expand="md">
        <NavbarToggler onClick={toggle} />
        <NavbarBrand href="/">VacTrack</NavbarBrand>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="rightNav ml-auto" navbar>
            <NavItem className='navbar'>
              <button className="btn" size="sm"><NavLink className='navbar' href="/oeas">Resources</NavLink></button>
            </NavItem>

            <NavItem className='navbar'>
              <button className="btn btn-sm btn-primary"><NavLink className='navbar' href="/vaccines">Vaccinations</NavLink></button>
            </NavItem>

            <NavItem className='navbar'>
              <button className="btn btn-sm btn-primary"><NavLink className='navbar' href="/blog">Blog</NavLink></button>
            </NavItem>

            <NavItem className='navbar'>
              <button className="btn btn-sm btn-primary"><NavLink className='navbar' href="/register">Register</NavLink></button>
            </NavItem>

            <NavItem className='navbar'>
              <button className="btn btn-sm btn-primary"><NavLink className='navbar' href="/login">Login</NavLink></button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar >
    </Fragment >
  );
  return (
    <div className="navbar bg-primary">
      <h1>
        <Link to='/'
          style={{ textDecoration: 'none' }}
        >
          <i className={icon} /> {title}
        </Link>
      </h1>
      <ul> {isAuthenticated ? authLinks : guestLinks} </ul>
    </div>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
}

Navbar.defaultProps = {
  title: 'VacTrack',
  icon: 'fas fa-id-card-alt'
};

export default Navbar_rs;