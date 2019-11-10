import {
   SEND_DATA_SIGNUP_REQUEST,
   // SEND_DATA_SIGNUP_SUCCESS,
   // SEND_DATA_SIGNUP_FAILURE
} from './redux/actions';

export const sendSignupDataMiddleware = store => next => action => {
   console.log('middlewares action: ', action);
   console.log('middlewares actionType: ', action.type);
   if (action.type === SEND_DATA_SIGNUP_REQUEST) {
      let user = {
         email: action.payload.userEmail,
         password: action.payload.password,
         name: action.payload.userName,
         surname: action.payload.userSurname
      };

      console.log(user);

      fetch('https://loft-taxi.glitch.me/register', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json;charset=utf-8'
         },
         body: JSON.stringify(user)
      })
         .then(response => response.json())
         .then(data => {
            console.log(data);
            store.dispatch();
         })
         .catch(error => {
            console.log(error);
            store.dispatch();
         })
   }
   // console.log(action);

   // console.log(store.getState());

   const result = next(action);

   // console.log(store.getState());

   return result;
};