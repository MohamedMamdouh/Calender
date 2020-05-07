import {takeLatest, all} from 'redux-saga/effects';
import API from '../services/API';

/* ------------- Types ------------- */
import {HomeTypes} from '../redux/HomeRedux';

/* ------------- Sagas ------------- */
import {getHolidays} from './HomeSagas';

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = API.create();

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([takeLatest(HomeTypes.HOLIDAYS_REQUEST, getHolidays, api)]);
}
