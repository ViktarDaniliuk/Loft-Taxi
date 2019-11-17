import { createStore, compose, applyMiddleware } from 'redux';
import {
   ON_LOGOUT,
   SEND_DATA_SIGNUP_SUCCESS,
   SEND_DATA_SIGNUP_FAILURE,
   SEND_DATA_LOGIN_SUCCESS,
   SEND_DATA_LOGIN_FAILURE,
   SEND_DATA_PROFILE_FAILURE,
   SEND_DATA_PROFILE_SUCCESS
} from './actions';
import { 
   sendSignupDataMiddleware, 
   sendLoginDataMiddleware,
   sendPaymentDataMiddleware
} from '../middlewares';

const INITIAL_STATE = {
   currentTab: "signup",
   isLoading: false,
   userData: {
      isLoggedIn: false,
      userName: '',
      userSurname: '',
      email: '',
      password: '',
      success: false,
      token: null,
      error: null
   },
   cardData: {
      isPaymentData: false,
      cardNumber: "",
      validity: "",
      userFullName: "",
      CVCcode: "",
      success: false,
      error: null
   }
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
   // console.log('action type from store: ', action.type);
   // console.log('action type from store: ', action);
   switch (action.type) {
      case ON_LOGOUT: {
         const stateCopy = {...state};

         stateCopy.currentTab = 'login';
         stateCopy.userData.isLoggedIn = false;
         stateCopy.userData.success = false;
         stateCopy.userData.token = null;

         return stateCopy;
      }
      case SEND_DATA_LOGIN_SUCCESS: {
         const stateCopy = {...state};

         stateCopy.currentTab = 'map';
         stateCopy.userData.isLoggedIn = true;
         stateCopy.userData.success = action.payload.success;
         stateCopy.userData.token = action.payload.token;

         return stateCopy;
      }
      case SEND_DATA_LOGIN_FAILURE: {
         const stateCopy = {...state};

         stateCopy.userData.error = action.payload.error;
         stateCopy.userData.success = action.payload.success;

         return stateCopy;
      }
      case SEND_DATA_SIGNUP_SUCCESS: {
         const stateCopy = {...state};
         
         stateCopy.userData.email = action.payload.email;
         stateCopy.userData.userName = action.payload.name;
         stateCopy.userData.userSurname = action.payload.surname;
         stateCopy.userData.password = action.payload.password;
         stateCopy.currentTab = 'map';
         stateCopy.userData.isLoggedIn = true;
         stateCopy.userData.success = action.payload.success;
         stateCopy.userData.token = action.payload.token;

         return stateCopy;
      }
      case SEND_DATA_SIGNUP_FAILURE: {
         const stateCopy = {...state};

         stateCopy.error = action.payload.error;
         stateCopy.success = action.payload.success;

         return stateCopy;
      }
      case SEND_DATA_PROFILE_SUCCESS: {
         const stateCopy = {...state};

         stateCopy.cardData.isPaymentData = true;
         stateCopy.cardData.cardNumber = action.payload.cardNumber;
         stateCopy.cardData.validity = action.payload.expiryDate;
         stateCopy.cardData.userFullName = action.payload.cardName;
         stateCopy.cardData.CVCcode = action.payload.cvc;
         stateCopy.cardData.success = action.payload.success;

         return stateCopy;
      }
      case SEND_DATA_PROFILE_FAILURE: {
         const stateCopy = {...state};

         stateCopy.cardData.success = action.payload.success;
         stateCopy.cardData.error = action.payload.error;

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
         applyMiddleware(sendPaymentDataMiddleware),
         window.__REDUX_DEVTOOLS_EXTENSION__
         ? window.__REDUX_DEVTOOLS_EXTENSION__()
         : noop => noop,
      )
   );

   return store;
};

export default createAppStore;