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
// const SEND_DATA_SIGNUP = 'SEND_DATA_SIGNUP';
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

const handleGetState = () => {
   return JSON.parse(localStorage.getItem('user'));
};

export const handleLogin = (name, pass) => {
   const { userName, password } = handleGetState();

   if (userName === name && password === pass) {
      this.setState({
         currentTab: 'profile',
         isLoggedIn: true
      })
   }
};

export const sendDataLogin = (newUserName, newPassword) => {
   return {
      type: SEND_DATA_LOGIN,
      payload: {
         userName: newUserName,
         password: newPassword
      }
   };
}

export const login = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case SEND_DATA_LOGIN: {
         let stateCopy = {...state};
         const { userName, password } = JSON.parse(localStorage.getItem('user'));

         if (userName === action.payload.userName && password === action.payload.password) {
            stateCopy.userName = action.payload.userName;
            stateCopy.password = action.payload.password;
            stateCopy.currentTab = 'profile';
            stateCopy.isLoggedIn = true;

            return stateCopy;
         }
         return state;
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