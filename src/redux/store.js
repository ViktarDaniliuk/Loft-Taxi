import { createStore, compose, applyMiddleware } from 'redux';
import {
   SEND_DATA_LOGIN,
   ON_LOGOUT,
   SEND_DATA_PROFILE,
   SEND_DATA_SIGNUP_SUCCESS,
   SEND_DATA_SIGNUP_FAILURE,
   SEND_DATA_LOGIN_SUCCESS
} from './actions';
import { 
   sendSignupDataMiddleware, 
   sendLoginDataMiddleware
} from '../middlewares';

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
   // не нужно хранить в стейте данные пользователя, оствить только token, currentTab, error и состояния (true/false)
   // error - возможно нужно будет поделить на ошибки от разных запросов
   // при перезагрузке поле ошибок обнулять - error: null
};

const checkLocalStorage = () => {
   if (!localStorage.user) return;

   INITIAL_STATE.currentTab = 'login';
   // добавить инициализацию всех данных с localStorage
   
   return INITIAL_STATE;
};

checkLocalStorage();

const rootReducer = (state = INITIAL_STATE, action) => {
   console.log('action type from store: ', action.type);
   console.log('action type from store: ', action);
   switch (action.type) {
      case ON_LOGOUT: {
         const stateCopy = {...state};

         stateCopy.currentTab = 'login';
         stateCopy.isLoggedIn = false;
         stateCopy.success = false;
         stateCopy.token = null;

         return stateCopy;
      }
      case SEND_DATA_LOGIN_SUCCESS: {
         const stateCopy = {...state};

         // stateCopy.email = action.payload.email;
         // stateCopy.password = action.payload.password;
         stateCopy.currentTab = 'map';
         stateCopy.isLoggedIn = true;
         stateCopy.success = action.payload.success;
         stateCopy.token = action.payload.token;

         return stateCopy;
      }
      case SEND_DATA_SIGNUP_SUCCESS: {
         const stateCopy = {...state};
         
         stateCopy.email = action.payload.newEmail;
         stateCopy.userName = action.payload.userName;
         stateCopy.userSurName = action.payload.userSurName;
         stateCopy.password = action.payload.password;
         stateCopy.currentTab = 'map';
         stateCopy.isLoggedIn = true;
         stateCopy.success = true;
         stateCopy.token = action.payload.token;

         return stateCopy;
      }
      case SEND_DATA_SIGNUP_FAILURE: {
         const stateCopy = {...state};
         
         stateCopy.error = action.payload.error;

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

const createAppStore = () => {
   const store = createStore(
      rootReducer,
      INITIAL_STATE,
      compose(
         applyMiddleware(sendSignupDataMiddleware),
         applyMiddleware(sendLoginDataMiddleware),
         window.__REDUX_DEVTOOLS_EXTENSION__
         ? window.__REDUX_DEVTOOLS_EXTENSION__()
         : noop => noop,
      )
   );

   return store;
};

export default createAppStore;