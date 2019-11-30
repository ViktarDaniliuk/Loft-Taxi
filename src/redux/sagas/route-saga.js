import { takeEvery, call, put } from 'redux-saga/effects';
import { getData } from './helper';
import {
   GET_ROUTE_REQUEST,
   getRouteSuccess,
   getRouteFailure
} from '../actions';

export function* handleGetRoute() {
   const path = 'route';

   yield takeEvery(GET_ROUTE_REQUEST, function* (action) {
      try {
         const result = yield call(getData, path, action.payload);

         yield put(getRouteSuccess(result));
      } catch (error) {
         console.log(error);
         yield put(getRouteFailure(error));
      }
   });
};