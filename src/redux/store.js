import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducer';
import {
   sagaSendSignupDataMiddleware,
   sagaSendLoginDataMiddleware,
   sagaSendPaymentDataMiddleware,
   sagaGetPaymentDataMiddleware,
   sagaGetAddressListMiddleware
} from './sagaMiddlewares';
import { handleSignUp, handleLogin, handleSendPaymentData, handleGetPaymentData, handleGetAddressList } from './sagas';

export const INITIAL_STATE = {
   currentTab: "signup",
   isLoading: false,
   addresses: [],
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
      id: "",
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

const createAppStore = () => {
   const store = createStore(
      rootReducer,
      INITIAL_STATE,
      compose(
         applyMiddleware(sagaSendSignupDataMiddleware),
         applyMiddleware(sagaSendLoginDataMiddleware),
         applyMiddleware(sagaSendPaymentDataMiddleware),
         applyMiddleware(sagaGetPaymentDataMiddleware),
         applyMiddleware(sagaGetAddressListMiddleware),
         window.__REDUX_DEVTOOLS_EXTENSION__
         ? window.__REDUX_DEVTOOLS_EXTENSION__()
         : noop => noop,
      )
   );

   sagaSendSignupDataMiddleware.run(handleSignUp);
   sagaSendLoginDataMiddleware.run(handleLogin);
   sagaSendPaymentDataMiddleware.run(handleSendPaymentData);
   sagaGetPaymentDataMiddleware.run(handleGetPaymentData);
   sagaGetAddressListMiddleware.run(handleGetAddressList);

   return store;
};

export default createAppStore;