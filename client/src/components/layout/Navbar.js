import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
  Button
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
        <NavbarBrand Link to="/" style={{ textDecoration: 'none' }}
        >
          <h4 className="greeting">Greetings {user && user.name}</h4>
        </NavbarBrand>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="navbar" navbar>
            <NavItem>
              <Button size="lg" block>
                <Link to="/oeas">Resources</Link>
              </Button>
            </NavItem>
            <NavItem>
              <Button size="lg" block>
                <Link to="/vaccines">Vaccinations</Link>
              </Button>
            </NavItem>
            <NavItem>
              <Button size="lg" block>
                <Link to="/blog">Blog</Link>
              </Button>
            </NavItem>
            <NavItem>
              <a onClick={onLogout} href="#!">
                <i className="fas fa-sign-out-alt" />{''}
                <span className="hide-lg">Logout</span>
              </a>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </Container >
  );

  const guestLinks = (
    <Container className="guests">
      <Navbar color="primary" light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="navbar" navbar>
            <NavItem>
              <Button text="fff" size="lg" block>
                <Link to="/oeas">Resources</Link>
              </Button>
            </NavItem>
            <NavItem>
              <Button size="lg" block>
                <Link to="/register" >Register</Link>
              </Button>
            </NavItem>
            <NavItem>
              <Button size="lg" block>
                <Link to="/login">Login</Link>
              </Button>
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
          <Link to='/'
            style={{ textDecoration: 'none' }}
          >
            <i className='logo fas fa-id-card-alt' /> VacTRACK
          </Link>
        </h1>
        <ul> {isAuthenticated ? authLinks : guestLinks} </ul>
      </div>
      <div>
        <Button color="danger" size="lg" block href="https://experience.arcgis.com/experience/685d0ace521648f8a5beeeee1b9125cd" target="_blank" rel="noopener noreferrer"><h4>COVID-19 Updates & Alerts</h4></Button>
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
  icon: 'fas fa-id-card-alt',
};

Button.propTypes = {
  active: PropTypes.bool,
  'aria-label': PropTypes.string,
  block: PropTypes.bool,
  color: PropTypes.string, // default: 'secondary'
  disabled: PropTypes.bool,
  outline: PropTypes.bool,
};

Button.defaultProps = {
  color: 'dark',
  tag: 'button',
}
export default Menubar;