import { takeEvery, call, put, select } from 'redux-saga/effects';
import { sendData, getStateToken } from './helper';
import {
   SEND_DATA_LOGIN_REQUEST,
   sendDataLoginSuccess,
   sendDataLoginFailure,
   getPaymentDataRequest
} from '../actions';
import { history } from '../../history';

export function* handleLogin() {
   const path = 'auth'

   yield takeEvery(SEND_DATA_LOGIN_REQUEST, function* (action) {
      try {
         const user = {
            email: action.payload.userEmail,
            password: action.payload.password
         };
         const result = yield call(sendData, user, path);
         const data = { ...result, ...user };

         if (data.error) throw data;

         yield put(sendDataLoginSuccess(data));

         if (data && data.success && data.success === true) {
            let token = yield select(getStateToken);
   
            yield put(getPaymentDataRequest(token));

            history.push('/map');
         }
      } catch (error) {
         console.log(error);
         yield put(sendDataLoginFailure(error));
      }
   });
};