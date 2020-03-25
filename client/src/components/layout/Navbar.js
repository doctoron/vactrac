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


  const [collapsed, setCollapsed] = useState(true);

  const toggle = () => setCollapsed(!collapsed);

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
        <Collapse isOpen={!collapsed} navbar>
          <Nav className="navbar" navbar>
            <NavbarBrand link="/" style={{ textDecoration: 'none' }} >
              <div>
                <h5 className="greeting">Greetings {user && user.name}</h5>
              </div>
            </NavbarBrand>
            <NavItem>
              <Button text="fff" size="md" block>
                <Link to="/oeas">Resources</Link>
              </Button>
            </NavItem>
            <NavItem>
              <Button size="md" block>
                <Link to="/vaccines">Vaccinations</Link>
              </Button>
            </NavItem>
            <NavItem>
              <Button size="md" block>
                <Link to="/blog">Blog</Link>
              </Button>
            </NavItem>
            <NavItem>
              <a onClick={onLogout} href="#!">
                <i className="fas fa-sign-out-alt" />{''}
                <span className="hide-md">Logout</span>
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
        <Collapse isOpen={!collapsed} navbar>
          <Nav className="navbar" navbar>
            <NavItem>
              <Button text="fff" size="md" block>
                <Link to="/oeas">Resources</Link>
              </Button>
            </NavItem>
            <NavItem>
              <Button size="md" block>
                <Link to="/register" >Register</Link>
              </Button>
            </NavItem>
            <NavItem>
              <Button size="md" block>
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
      <Navbar color="primary" light expand="md">
        <NavbarToggler onClick={toggle} />
        <Link to='/'
          style={{ textDecoration: 'none' }} >
          <h2><i className='logo fas fa-id-card-alt' />VacTRACK</h2>
        </Link>
        <ul> {isAuthenticated ? authLinks : guestLinks} </ul>

      </Navbar>

      <div>
        <Button color="danger" size="lg" block href="https://www.cdc.gov/coronavirus/2019-ncov/index.html" target="_blank" rel="noopener noreferrer"><h4>COVID-19 Updates & Alerts</h4></Button>
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