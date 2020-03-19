import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import VaccineContext from '../../context/vaccinations/vaccineContext';
import PropTypes from 'prop-types';

import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const Menubar = (props) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, logout, user, loadUser } = authContext;
  const vaccineContext = useContext(VaccineContext);
  const { clearVaccines } = vaccineContext;

  const toggle = () => setIsOpen(!isOpen);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  const onLogout = () => {
    logout();
    clearVaccines();
  };


  const authLinks = (
    <Container className="authorized">
      <Navbar color="primary" light expand="md">
        <NavbarToggler onClick={toggle} />
        <NavbarBrand href="/" style={{ textDecoration: 'none' }}
        >
          <h4 className="greeting">Greetings {user && user.name}</h4>
        </NavbarBrand>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="text-right" navbar>
            <NavItem>
              <button color="success" size="sm">
                <NavLink href="/oeas">Resources</NavLink>
              </button>
            </NavItem>
            <NavItem>
              <button color="success" size="sm">
                <NavLink href="/vaccines">Vaccinations</NavLink>
              </button>
            </NavItem>
            <NavItem>
              <button color="success" size="sm">
                <NavLink href="/blog">Blog</NavLink>
              </button>
            </NavItem>
            <NavItem>
              <a onClick={onLogout} href="#!">
                <i className="fas fa-sign-out-alt" />{''}
                <span className="hide-sm">Logout</span>
              </a>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </Container>
  );

  const guestLinks = (
    <Container className="guests">
      <Navbar color="primary" light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <button color="success" text="fff" size="sm">
                <NavLink href="/oeas">Resources</NavLink>
              </button>
            </NavItem>
            <NavItem>
              <button color="success" size="sm">
                <NavLink href="/register" >Register</NavLink>
              </button>
            </NavItem>
            <NavItem>
              <button color="success" size="sm">
                <NavLink href="/login">Login</NavLink>
              </button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </Container >
  )

  return (
    <Container>
      <div className="navbar bg-primary">
        <h1>
          <NavLink href='/'
            style={{ textDecoration: 'none' }}
          >
            <i className='logo fas fa-id-card-alt' /> VacTrack
          </NavLink>
        </h1>
        <ul> {isAuthenticated ? authLinks : guestLinks} </ul>
      </div>
    </Container>

  );
};

Menubar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
}

Menubar.defaultProps = {
  title: 'VacTrack',
  icon: 'fas fa-id-card-alt'
};

export default Menubar;