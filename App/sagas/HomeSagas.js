import {call, put} from 'redux-saga/effects';
import {path} from 'ramda';
import HomeActions from '../redux/HomeRedux';

export function* getHolidays(api, action) {
  const {country} = action;
  // make the call to the api
  const response = yield call(api.getHolidays, country);

  if (response.ok) {
    const items = path(['data', 'items'], response);
    const data = items.map((item) => {
      return {
        summary: path(['summary'], item),
        start: path(['start', 'date'], item),
        end: path(['end', 'date'], item),
      };
    });
    // do data conversion here if needed
    console.log('CALLED', data);

    // yield put(HomeActions.holidaysSuccess(data));
  } else {
    yield put(HomeActions.holidaysFailure());
  }
}
