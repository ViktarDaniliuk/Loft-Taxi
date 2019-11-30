import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducer';
import { rootSaga } from './sagas/saga-middleware';
import { rootHandle } from './sagas/sagas';

export const INITIAL_STATE = {
   currentTab: "signup",
   isLoading: false,
   isUserDataInLocalStorage: false,
   addresses: [],
   coordinates: [],
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
   },
   route: null
};

const checkLocalStorage = () => {
   if (!localStorage.user) return;

   INITIAL_STATE.currentTab = 'login';
   INITIAL_STATE.isUserDataInLocalStorage = true;
   
   return INITIAL_STATE;
};

checkLocalStorage();

const createAppStore = () => {
   const store = createStore(
      rootReducer,
      INITIAL_STATE,
      compose(
         applyMiddleware(rootSaga),
         window.__REDUX_DEVTOOLS_EXTENSION__
         ? window.__REDUX_DEVTOOLS_EXTENSION__()
         : noop => noop,
      )
   );

   rootSaga.run(rootHandle);

   return store;
};

export default createAppStore;