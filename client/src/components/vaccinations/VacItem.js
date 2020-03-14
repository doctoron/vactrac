import React, { useContext } from 'react';
import { Jumbotron, Container } from 'reactstrap';
import PropTypes from 'prop-types';
import VaccineContext from '../../context/vaccinations/vaccineContext';

const VacItem = ({ vaccine }) => {
  const vaccineContext = useContext(VaccineContext);
  const { deleteVaccine, setCurrent, clearCurrent } = vaccineContext;

  const { _id, vaccineName, dateDue, dateGiven, type } = vaccine;

  const onDelete = () => {
    deleteVaccine(_id);
    clearCurrent();
  }

  return (
    // <Jumbotron>
    <Container>
      <div className='card bg-light'>
        <h3 className="text-primary text-left">
          {vaccineName}{' '}
          <span style={{ float: 'right' }}
            className={'badge ' +
              (type === 'Received' ? 'badge-success' : 'badge-primary')
            }
          >
            {/* Take first character to uppercase */}
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </span>
        </h3>
        <ul className="list">
          {dateGiven && (<li >
            <i className="fas fa-syringe syringe"></i> {dateGiven}
          </li>)}
          {dateDue && (<li>
            <i className="fas fa-syringe syringe"></i> {dateDue}
          </li>)}
        </ul>
        <p>
          {(type === 'received' ? <button className="btn btn-success btn-sm">MyVacTrack</button> : " ")}
          <button className="btn btn-dark btn-sm" onClick={() => setCurrent(vaccine)}>Edit</button>
          <button className="btn btn-danger btn-sm" onClick={onDelete}>Delete</button>
        </p>
      </div>
    </Container>
    // </Jumbotron>
  );
};

VacItem.propTypes = {
  vaccine: PropTypes.object.isRequired
}

export default VacItem;