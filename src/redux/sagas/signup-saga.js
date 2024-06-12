import { takeEvery, call, put } from 'redux-saga/effects';
import { SEND_DATA_SIGNUP_REQUEST, sendDataSignupSuccess, sendDataSignupFailure } from '../actions';
import { history } from '../../history';
import { sendData } from './helper';

export function* handleSignUp() {
   const path = 'register'

   yield takeEvery(SEND_DATA_SIGNUP_REQUEST, function* (action) {
      try {
         const user = {
            email: action.payload.userEmail,
            password: action.payload.password,
            name: action.payload.userName,
            surname: action.payload.userSurname
         };
         const result = yield call(sendData, user, path);
         const data = { ...result, ...user };

         if (data.error) throw data;

         yield put(sendDataSignupSuccess(data));

         if (data && data.success && data.success === true) {
            localStorage.setItem('user', JSON.stringify(data));
            history.push('/map');
         }
      } catch (error) {
         console.log(error);
         yield put(sendDataSignupFailure(error));
      }
   });
};