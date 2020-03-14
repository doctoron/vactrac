import React, { useReducer } from 'react';
import axios from 'axios';
import VaccineContext from './vaccineContext';
import vaccineReducer from './vaccineReducer';
import {
  GET_VACCINES,
  ADD_VACCINE,
  DELETE_VACCINE,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_VACCINE,
  FILTER_VACCINES,
  CLEAR_FILTER,
  CLEAR_VACCINES,
  VACCINE_ERROR
} from '../types';

const VaccineState = props => {
  const initialState = {
    vaccines: null,
    current: null,
    filtered: null,
    error: null
  };

  const [state, dispatch] = useReducer(vaccineReducer, initialState);

  // Get Vaccines
  const getVaccines = async () => {
    try {
      const res = await axios.get('/api/vaccines');

      dispatch({
        type: GET_VACCINES,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: VACCINE_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Add Vaccine
  const addVaccine = async vaccine => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.post('/api/vaccines', vaccine, config);

      dispatch({
        type: ADD_VACCINE,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: VACCINE_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Delete Vaccination
  const deleteVaccine = async id => {
    try {
      await axios.delete(`/api/vaccines/${id}`);

      dispatch({
        type: DELETE_VACCINE,
        payload: id
      });
    } catch (err) {
      dispatch({
        type: VACCINE_ERROR,
        payload: err.response.msg
      });
    }
  };


  // Update Vaccination 
  const updateVaccine = async vaccine => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.put(
        `/api/vaccines/${vaccine._id}`,
        vaccine,
        config
      );

      dispatch({
        type: UPDATE_VACCINE,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: VACCINE_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Clear Vaccines
  const clearVaccines = () => {
    dispatch({ type: CLEAR_VACCINES });
  };

  // Set Current Vaccines
  const setCurrent = vaccine => {
    dispatch({ type: SET_CURRENT, payload: vaccine });
  };

  // Clear Current Vaccine
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Filter Vaccines
  const filterVaccines = text => {
    dispatch({ type: FILTER_VACCINES, payload: text });
  };

  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };


  return (
    <VaccineContext.Provider
      value={{
        vaccines: state.vaccines,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        addVaccine,
        deleteVaccine,
        setCurrent,
        clearCurrent,
        updateVaccine,
        filterVaccines,
        clearFilter,
        getVaccines,
        clearVaccines
      }}
    >
      {props.children}
    </VaccineContext.Provider >
  );
};

export default VaccineState;