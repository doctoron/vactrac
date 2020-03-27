import React, { Fragment, useContext, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Cards from '../../components/cards/Cards';
import AuthContext from '../../context/auth/authContext';
import Roundabout from '../../components/roundabout/Roundabout';

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <Container>
        <Roundabout />
      </Container>
      <Container>
        <Row>
          <Col lg="auto"><Cards /></Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Home;
