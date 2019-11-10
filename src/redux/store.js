import { createStore, compose, applyMiddleware } from 'redux';
import {
   SEND_DATA_LOGIN,
   ON_LOGOUT,
   SEND_DATA_PROFILE,
   SEND_DATA_SIGNUP,
   SEND_DATA_SIGNUP_REQUEST,
   // SEND_DATA_SIGNUP_REQUEST,
   // SEND_DATA_SIGNUP_SUCCESS,
   // SEND_DATA_SIGNUP_FAILURE
} from './actions';
import { sendSignupDataMiddleware } from '../middlewares';

const INITIAL_STATE = {
   currentTab: "signup",
   isPaymentData: false,
   isLoggedIn: false,
   isLoading: false,
   success: false,
   token: null,
   error: null,
   userName: '',
   userSurname: '',
   email: '',
   password: '',
   cardNumber: "",
   validity: "",
   userFullName: "",
   CVCcode: ""
};

const checkLocalStorage = () => {
   if (!localStorage.user) return;

   INITIAL_STATE.currentTab = 'login';
   
   return INITIAL_STATE;
};

checkLocalStorage();

const rootReducer = (state = INITIAL_STATE, action) => {
   console.log('action type from store: ', action.type);
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
      case SEND_DATA_SIGNUP_REQUEST: {
         const stateCopy = {...state};
         
         stateCopy.email = action.payload.newEmail;
         stateCopy.userName = action.payload.userName;
         stateCopy.userSurName = action.payload.userSurName;
         stateCopy.password = action.payload.password;
         stateCopy.currentTab = 'profile';
         stateCopy.isLoggedIn = true;

         return stateCopy;
      }
      case SEND_DATA_PROFILE: {
         const stateCopy = {...state};

         stateCopy.isPaymentData = true;
         stateCopy.cardNumber = action.payload.cardNumber;
         stateCopy.validity = action.payload.validity;
         stateCopy.userFullName = action.payload.userFullName;
         stateCopy.CVCcode = action.payload.CVCcode;

         return stateCopy;
      }
      default:
         return state;
   }
};

// export const store = createStore(rootReducer, INITIAL_STATE);

const createAppStore = () => {
   const store = createStore(
      rootReducer,
      INITIAL_STATE,
      compose(
         applyMiddleware(sendSignupDataMiddleware),
         // window.__REDUX_DEVTOOLS_EXTENSION__
         // ? window.__REDUX_DEVTOOLS_EXTENSION__()
         // : noop => noop,
      )
   );

   return store;
};

export default createAppStore;

// store.subscribe(() => {
//    // console.log('subsciber');
//    // console.log(store.getState());
// });