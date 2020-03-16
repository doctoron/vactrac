import React, { Fragment, useContext, useEffect } from 'react';
// import { Container, Jumbotron } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import VacItem from './VacItem';
import Spinner from '../layout/Spinner';
import VaccineContext from '../../context/vaccinations/vaccineContext';

const Vaccinations = () => {
  const vaccineContext = useContext(VaccineContext);

  const { vaccines, filtered, getVaccines, loading } = vaccineContext;

  useEffect(() => {
    getVaccines();
    // eslint-disable-next-line
  }, []);

  if (vaccines !== null && vaccines.length === 0 && !loading) {
    return <h4>Review or Schedule Vaccinations</h4>;
  }

  return (
    <Fragment>
      {/* <Container> */}
      {/* <Jumbotron> */}
      <h3 className="text-primary">My Vaccines</h3>
      {vaccines != null && !loading ? (
        <TransitionGroup>
          {filtered !== null
            ? filtered.map(vaccine => (
              <CSSTransition
                key={vaccine._id}
                timeout={500}
                classNames="item"
              >
                <VacItem vaccine={vaccine} />
              </CSSTransition>
            ))
            : vaccines.map(vaccine => (
              <CSSTransition
                key={vaccine._id}
                timeout={500}
                classNames="item"
              >
                <VacItem vaccine={vaccine} />
              </CSSTransition>
            ))}
        </TransitionGroup>
      ) : (
          <Spinner />
        )}
      {/* </Jumbotron> */}
      {/* </Container> */}
    </Fragment>
  )
};

export default Vaccinations;
