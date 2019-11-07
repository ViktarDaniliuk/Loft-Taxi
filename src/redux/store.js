import { createStore } from 'redux';

const INITIAL_STATE = {
   currentTab: "signup",
   paymentData: false,
   isLoggedIn: false,
   userName: '',
   userSurname: '',
   email: '',
   password: ''
};

const SEND_DATA_LOGIN = 'SEND_DATA_LOGIN';
const ON_LOGOUT = 'ON_LOGOUT';
const SEND_DATA_SIGNUP = 'SEND_DATA_SIGNUP';
// const UPDATE_EMAIL = 'UPDATE_EMAIL';
// const UPDATE_USER_NAME_SIGNUP = 'UPDATE_USER_NAME_SIGNUP';
// const UPDATE_USER_SURNAME = 'UPDATE_USER_SURNAME';
// const UPDATE_PASSWORD_SIGNPU = 'UPDATE_PASSWORD_SIGNPU'
// const SEND_DATA_PROFILE = 'SEND_DATA_PROFILE';
// const UPDATE_CARD_NUMBER = 'UPDATE_CARD_NUMBER';
// const UPDATE_VALIDITY = 'UPDATE_VALIDITY';
// const UPDATE_USER_NAME_PROFILE = 'UPDATE_USER_NAME_PROFILE';
// const UPDATE_CVC_CODE = 'UPDATE_CVC_CODE';
// const REDIRECT_TO_MAP = 'REDIRECT_TO_MAP';
// const REDIRECT_TO_PROFILE = 'REDIRECT_TO_PROFILE';
// const REDIRECT_TO_LOGIN = 'REDIRECT_TO_LOGIN';

export const sendDataSignup = (newEmail, newUserName, newUserSurName, newPassword) => {

   return {
      type: SEND_DATA_SIGNUP,
      payload: {
         userEmail: newEmail,
         userName: newUserName,
         userSurname: newUserSurName,
         password: newPassword
      }
   };
}

export const sendDataLogin = (newUserName, newPassword) => {

   return {
      type: SEND_DATA_LOGIN,
      payload: {
         userName: newUserName,
         password: newPassword
      }
   };
}

export const onLogout = () => {
   return {
      type: ON_LOGOUT,
      payload: {

      }
   };
}

const login = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case ON_LOGOUT: {
         const stateCopy = {...state};
         stateCopy.currentTab = 'login';
         stateCopy.isLoggedIn = false;
         return stateCopy;
      }
      case SEND_DATA_LOGIN: {
         const stateCopy = {...state};

         stateCopy.userName = action.payload.userName;
         stateCopy.password = action.payload.password;
         stateCopy.currentTab = 'profile';
         stateCopy.isLoggedIn = true;

         return stateCopy;
      }
      case SEND_DATA_SIGNUP: {
         const stateCopy = {...state};
         
         stateCopy.email = action.payload.newEmail;
         stateCopy.userName = action.payload.userName;
         stateCopy.userSurName = action.payload.userSurName;
         stateCopy.password = action.payload.password;
         stateCopy.currentTab = 'profile';
         stateCopy.isLoggedIn = true;

         return stateCopy;
      }
      default:
         return state;
   }
};

export const store = createStore(login, INITIAL_STATE);

store.subscribe(() => {
   // console.log('subsciber');
   // console.log(store.getState());
});