import { takeEvery, call, put } from 'redux-saga/effects';
import { getData } from './helper';
import {
   GET_ADDRESS_LIST_REQUEST,
   getAddressListSuccess,
   getAddressListFailure
} from '../actions';

export function* handleGetAddressList() {
   const path = 'addressList';

   yield takeEvery(GET_ADDRESS_LIST_REQUEST, function* (action) {
      try {
         const result = yield call(getData, path);

         yield put(getAddressListSuccess(result));
      } catch (error) {
         console.log(error);
         yield put(getAddressListFailure(error));
      }
   });
};