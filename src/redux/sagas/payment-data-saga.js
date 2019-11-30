import { takeEvery, call, put, select } from 'redux-saga/effects';
import { getData, sendData, getStateToken } from './helper';
import {
   SEND_DATA_PROFILE_REQUEST,
   sendPaymentDataSuccess,
   sendPaymentDataFailure,
   GET_PAYMENT_DATA_REQUEST,
   getPaymentDataSuccess,
   getPaymentDataFailure
} from '../actions';
import { history } from '../../history';

export function* handleSendPaymentData() {
   const path = 'card'

   yield takeEvery(SEND_DATA_PROFILE_REQUEST, function* (action) {
      try {
         const token = yield select(getStateToken);
         const user = {
            cardNumber: action.payload.cardNumber,
            expiryDate: action.payload.validity,
            cardName: action.payload.userFullName,
            cvc: action.payload.CVCcode,
            token: token
         };
         const result = yield call(sendData, user, path);
         const data = { ...result, ...user };

         if (data.error) throw data;

         yield put(sendPaymentDataSuccess(data));

         if (data && data.success && data.success === true) {
            history.push('/map');
         }
      } catch (error) {
         console.log(error);
         yield put(sendPaymentDataFailure(error));
      }
   });
};

export function* handleGetPaymentData() {
   const path = 'card'

   yield takeEvery(GET_PAYMENT_DATA_REQUEST, function* (action) {
      try {
         const args = {
            token: action.payload.token
         };
         const result = yield call(getData, path, args);

         if (result.error) throw result;

         yield put(getPaymentDataSuccess(result));
      } catch (error) {
         console.log(error);
         yield put(getPaymentDataFailure(error));
      }
   });
};