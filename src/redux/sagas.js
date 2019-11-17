import { takeEvery, call, put } from 'redux-saga/effects';
import {
   SEND_DATA_SIGNUP_REQUEST,
   sendDataSignupSuccess,
   sendDataSignupFailure,
   SEND_DATA_LOGIN_REQUEST,
   sendDataLoginSuccess,
   sendDataLoginFailure,
   // SEND_DATA_PROFILE_REQUEST,
   // sendPaymentDataSuccess,
   // sendPaymentDataFailure
} from './actions';
import { history } from '../history';

const getToken = (user, path) => {
   console.log('Path: ', `https://loft-taxi.glitch.me/${path}`);
   console.log('User: ', user);
   fetch(`https://loft-taxi.glitch.me/${path}`, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(user)
   })
      .then(response => response.json())
}

export function* handleSignUp() {
   let path = 'register'

   yield takeEvery(SEND_DATA_SIGNUP_REQUEST, function* (action) {
      try {
         let user = {
            email: action.payload.userEmail,
            password: action.payload.password,
            name: action.payload.userName,
            surname: action.payload.userSurname
         };
         const result = yield call(getToken, user, path);
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

export function* handleLogin() {
   let path = 'auth'

   yield takeEvery(SEND_DATA_LOGIN_REQUEST, function* (action) {
      try {
         console.log('Action: ', action);
         let user = {
            email: action.payload.userEmail,
            password: action.payload.password
         };
         const result = yield call(getToken, user, path);
         const data = { ...result, ...user };

         if (data.error) throw data;

         yield put(sendDataLoginSuccess(data));

         if (data && data.success && data.success === true) {
            console.log('login successed');
            history.push('/map');
         }
      } catch (error) {
         console.log(error);
         yield put(sendDataLoginFailure(error));
      }
   });
};