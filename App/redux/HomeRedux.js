import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({
  holidaysRequest: ['country', 'password'],
  holidaysSuccess: ['data'],
  holidaysFailure: null,
});

export const HomeTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: null,
  error: null,
  data: null,
});

/* ------------- Reducers ------------- */

// request the data for a user
export const request = (state, action) => {
  const {country} = action;
  return state.merge({fetching: true, country});
};

// successful data lookup
export const success = (state, action) => {
  const {data} = action;
  return state.merge({
    fetching: false,
    error: null,
    data,
  });
};

// failed to get the Data
export const failure = (state) => state.merge({fetching: false, error: true});

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.HOLIDAYS_REQUEST]: request,
  [Types.HOLIDAYS_SUCCESS]: success,
  [Types.HOLIDAYS_FAILURE]: failure,
});
