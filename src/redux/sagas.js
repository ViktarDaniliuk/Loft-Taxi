import { takeEvery, call, put, select } from 'redux-saga/effects';
import {
   SEND_DATA_SIGNUP_REQUEST,
   sendDataSignupSuccess,
   sendDataSignupFailure,
   SEND_DATA_LOGIN_REQUEST,
   sendDataLoginSuccess,
   sendDataLoginFailure,
   SEND_DATA_PROFILE_REQUEST,
   sendPaymentDataSuccess,
   sendPaymentDataFailure,
   GET_PAYMENT_DATA_REQUEST,
   getPaymentDataRequest,
   getPaymentDataSuccess,
   getPaymentDataFailure,
   GET_ADDRESS_LIST_REQUEST,
   getAddressListSuccess,
   getAddressListFailure,
   GET_ROUTE_REQUEST,
   getRouteSuccess,
   getRouteFailure
} from './actions';
import { history } from '../history';

const sendData = (user, path) => {
   return fetch(`https://loft-taxi.glitch.me/${path}`, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(user)
   })
      .then(response => response.json())
};

const getData = (path, args = {}) => {
   let searchLine = '';

   for ( let key in args ) { // доработать построение строки запроса ? key '=' value '&' .....
      searchLine += key + '=' + args[key] + '&';
   }
console.log(`https://loft-taxi.glitch.me/${path}?${searchLine}`);
   return fetch(`https://loft-taxi.glitch.me/${path}?${searchLine}`, {
      method: 'GET',
      headers: {
         'Content-Type': 'application/json;charset=utf-8'
      }
   })
      .then(response => response.json())
};

const getStateToken = state => state.userData.token;

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

export function* handleLogin() {
   let path = 'auth'

   yield takeEvery(SEND_DATA_LOGIN_REQUEST, function* (action) {
      try {
         let user = {
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

export function* handleSendPaymentData() {
   let path = 'card'

   yield takeEvery(SEND_DATA_PROFILE_REQUEST, function* (action) {
      try {
         let token = yield select(getStateToken);
         let user = {
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
   let path = 'card'

   yield takeEvery(GET_PAYMENT_DATA_REQUEST, function* (action) {
      try {
         let args = {
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

export function* handleGetAddressList() {
   let path = 'addressList';

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

export function* handleGetRoute() {
   let path = 'route';

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