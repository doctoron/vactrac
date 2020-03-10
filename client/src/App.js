import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import User from './components/pages/User';
import EarlyAlert from './components/pages/EarlyAlert';
import VacRecs from './components/pages/VacRecords';
import Blog from './components/pages/Blog';
import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alerts from './components/layout/Alerts';
import PrivateRoute from './components/routing/PrivateRoute';
import AlertState from './context/alert/AlertState';
import setAuthToken from './utils/setAuthToken';


import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <Fragment>
              {/* <NavStrap /> */}
              <Navbar />
              <div className="container">
                <Alerts />
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/login' component={Login} />
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/oeas' component={EarlyAlert} />
                  <PrivateRoute exact path='/user' component={User} />
                  <PrivateRoute exact path='/vacrecs' component={VacRecs} />
                  <PrivateRoute exact path='/blog' component={Blog} />
                  {/* <Route exact path='/about' component={About} /> */}
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  )
}

//  New automatic <Route> ranking with a new <Routes> API coming soon...             
// <Route path='/' element={<Home />} />
// <Route path='/user' element={<User />} />
// <Route path='/about' element={<About />} />


export default App;
