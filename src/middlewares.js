import {
   SEND_DATA_SIGNUP_REQUEST,
   sendDataSignupSuccess,
   sendDataSignupFailure,
   SEND_DATA_LOGIN_REQUEST,
   sendDataLoginSuccess,
   sendDataLoginFailure,
   SEND_DATA_PROFILE_REQUEST,
   sendPaymentDataSuccess,
   sendPaymentDataFailure
} from './redux/actions';
import { history } from './history';

export const sendSignupDataMiddleware = store => next => action => {
   if (action.type === SEND_DATA_SIGNUP_REQUEST) {
      let user = {
         email: action.payload.userEmail,
         password: action.payload.password,
         name: action.payload.userName,
         surname: action.payload.userSurname
      };

      fetch('https://loft-taxi.glitch.me/register', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json;charset=utf-8'
         },
         body: JSON.stringify(user)
      })
         .then(response => response.json())
         .then(data => {
            data = {...data, ...user};

            if (data.error) throw data;

            store.dispatch(sendDataSignupSuccess(data));

            if (data && data.success && data.success === true) {
               localStorage.setItem('user', JSON.stringify(data));
               history.push('/map');
            }
         })
         .catch(error => {
            store.dispatch(sendDataSignupFailure(error));
            //-------------------------------------------
            // сделать обработку ошибки
            //-------------------------------------------
         })
   } 
   
   return  next(action);
};

export const sendLoginDataMiddleware = store => next => action => {

   if (action.type === SEND_DATA_LOGIN_REQUEST) {
      let user = {
         email: action.payload.userEmail,
         password: action.payload.password
      };

      fetch('https://loft-taxi.glitch.me/auth', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json;charset=utf-8'
         },
         body: JSON.stringify(user)
      })
         .then(response => response.json())
         .then(data => {
            data = {...data, ...user};

            if (data.error) throw data;

            store.dispatch(sendDataLoginSuccess(data));

            if (data && data.success && data.success === true) {
               history.push('/map');
            }
         })
         .catch(error => {
            store.dispatch(sendDataLoginFailure(error));
            //-------------------------------------------
            // сделать обработку ошибки
            //-------------------------------------------
         })
   } 
   
   return next(action);
};

export const sendPaymentDataMiddleware = store => next => action => {

   if (action.type === SEND_DATA_PROFILE_REQUEST) {
      let authToken = store.getState().userData.token;
      let user = {
         cardNumber: action.payload.cardNumber,
         expiryDate: action.payload.validity,
         cardName: action.payload.userFullName,
         cvc: action.payload.CVCcode,
         token: authToken
      };

      fetch('https://loft-taxi.glitch.me/card', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json;charset=utf-8'
         },
         body: JSON.stringify(user)
      })
         .then(response => response.json())
         .then(data => {
            data = {...data, ...user};

            if (data.error) throw data;

            store.dispatch(sendPaymentDataSuccess(data));

            if (data && data.success && data.success === true) {
               history.push('/map');
            }
         })
         .catch(error => {
            store.dispatch(sendPaymentDataFailure(error));
            //-------------------------------------------
            // сделать обработку ошибки
            //-------------------------------------------
         })
   } 
   
   return next(action);
};