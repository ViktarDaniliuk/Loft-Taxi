import { takeEvery, call, put } from 'redux-saga/effects';
import {
   sendDataSignupRequest,
   sendDataSignupSuccess,
   sendDataSignupFailure,
   sendDataLoginRequest,
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

   yield takeEvery(sendDataSignupRequest().type, function* () {
      try {
         let payload = sendDataSignupRequest().payload;
         let user = {
            email: payload.userEmail,
            password: payload.password,
            name: payload.userName,
            surname: payload.userSurname
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

   yield takeEvery(sendDataLoginRequest().type, function* () {
      try {
         console.log(sendDataLoginRequest());
         let payload = sendDataLoginRequest().payload;
         console.log('Payload: ', payload);
         let user = {
            email: payload.userEmail,
            password: payload.password
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