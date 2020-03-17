import React, { Fragment, useContext, useEffect } from 'react';
import { Button, Container } from 'reactstrap';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
// import ContactContext from '../../context/contact/contactContext';
import VaccineContext from '../../context/vaccinations/vaccineContext';

export const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);
  // const contactContext = useContext(ContactContext);
  const vaccineContext = useContext(VaccineContext);

  const { isAuthenticated, logout, user, loadUser } = authContext;
  // const { clearContacts } = contactContext;
  const { clearVaccines } = vaccineContext;


  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  const onLogout = () => {
    logout();
    // clearContacts();
    clearVaccines();
  };

  const authLinks = (
    <Fragment>
      <Container>
        <li><Button color="success"
        >
          Hello {user && user.name}
        </Button></li>
        <li>
          <Button color="primary">
            <Link to="/oeas"
              style={{ textDecoration: 'none' }}
            >
              Resources
            </Link>
          </Button>
        </li>
        <li>
          <Button color="primary">
            <Link to="/vaccines"
              style={{ textDecoration: 'none' }}
            >
              Vaccinations
          </Link>
          </Button>
        </li>
        <li>
          <Button color="primary">
            <Link to="/blog"
              style={{ textDecoration: 'none' }}
            >
              Blog
            </Link>
          </Button>
        </li>

        <li>
          <a onClick={onLogout} href="#!">
            <i className="fas fa-sign-out-alt" />{''}
            <span className="hide-sm">Logout</span>
          </a>
        </li>
      </Container>
    </Fragment >
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Button color="primary">
          <Link to="/oeas"
            style={{ textDecoration: 'none' }}
          >
            Resources
          </Link>
        </Button>
      </li>
      <li>
        <Button color="primary">
          <Link to="/register"
            style={{ textDecoration: 'none' }}
          >
            Register
          </Link>
        </Button>
      </li>
      <li>
        <Button color="primary">
          <Link to="/login"
            style={{ textDecoration: 'none' }}
          >
            Login
          </Link>
        </Button>
      </li>
      {/* <li>
        <Button color="primary"><Link to="/about">About</Link></Button>
      </li> */}
    </Fragment>
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

  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
}

Navbar.defaultProps = {
  title: 'VacTrack',
  icon: 'fas fa-id-card-alt'
};

export default Navbar;
