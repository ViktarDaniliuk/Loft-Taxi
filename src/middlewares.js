import {
   SEND_DATA_SIGNUP_REQUEST,
   sendDataSignupSuccess,
   sendDataSignupFailure,
   SEND_DATA_LOGIN_REQUEST,
   sendDataLoginSuccess,
   sendDataLoginFailure
} from './redux/actions';
import { history } from './history';

export const sendSignupDataMiddleware = store => next => action => {
   console.log('middlewares action: ', action);
   // console.log('middlewares actionType: ', action.type);
   if (action.type === SEND_DATA_SIGNUP_REQUEST) {
      let user = {
         email: action.payload.userEmail,
         password: action.payload.password,
         name: action.payload.userName,
         surname: action.payload.userSurname
      };

      // console.log(user);

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
            console.log(data);
            store.dispatch(sendDataSignupSuccess(data));
            if (data && data.success && data.success === true) {
               localStorage.setItem('user', JSON.stringify(data));
               history.push('/map');
            }
         })
         .catch(error => {
            console.log(error);
            store.dispatch(sendDataSignupFailure(error));
            //-------------------------------------------
            // сделать обработку ошибки
            //-------------------------------------------
         })
   } 

   console.log(store.getState());

   const result = next(action);

   console.log(store.getState());

   return result;
};

export const sendLoginDataMiddleware = store => next => action => {
   console.log('middlewares action: ', action);
   // console.log('middlewares actionType: ', action.type);
   if (action.type === SEND_DATA_LOGIN_REQUEST) {
      let user = {
         email: action.payload.userEmail,
         password: action.payload.password
      };

      console.log(user);

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
            console.log(data);
            store.dispatch(sendDataLoginSuccess(data));
            if (data && data.success && data.success === true) {
               history.push('/map');
            }
         })
         .catch(error => {
            console.log(error);
            store.dispatch(sendDataLoginFailure(error));
            //-------------------------------------------
            // сделать обработку ошибки
            //-------------------------------------------
         })
   } 

   console.log(store.getState());

   const result = next(action);

   console.log(store.getState());

   return result;
};