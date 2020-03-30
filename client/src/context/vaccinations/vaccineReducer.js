import {
  GET_VACCINES,
  ADD_VACCINE,
  DELETE_VACCINE,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_VACCINE,
  FILTER_VACCINES,
  CLEAR_FILTER,
  VACCINE_ERROR,
  CLEAR_VACCINES
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_VACCINES:
      return {
        ...state,
        vaccines: action.payload,
        loading: false
      };
    case ADD_VACCINE:
      return {
        ...state,
        vaccines: [action.payload, ...state.vaccines],
        loading: false
      };
    case UPDATE_VACCINE:
      return {
        ...state,
        vaccines: state.vaccines.map(vaccine =>
          vaccine._id === action.payload._id ? action.payload : vaccine
        ),
        loading: false
      };
    case DELETE_VACCINE:
      return {
        ...state,
        vaccines: state.vaccines.filter(
          vaccine => vaccine._id !== action.payload
        ),
        loading: false
      };
    case CLEAR_VACCINES:
      return {
        ...state,
        vaccines: null,
        filtered: null,
        error: null,
        current: null
      }
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };
    case FILTER_VACCINES:
      return {
        ...state,
        filtered: state.vaccines.filter(vaccine => {
          const regex = new RegExp(`${action.payload}`, 'gi')
          return vaccine.vaccineName.match(regex) ||
            vaccine.dateReceived.match(regex) ||
            vaccine.dateScheduled.match(regex);
        })
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null
      };
    case VACCINE_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
