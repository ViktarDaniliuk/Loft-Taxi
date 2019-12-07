import {
   ON_LOGOUT,
   ON_MAKE_NEW_ORDER,
   ON_CHANGE_STORE_ADDRESSES,
   SEND_DATA_SIGNUP_SUCCESS,
   SEND_DATA_SIGNUP_FAILURE,
   SEND_DATA_LOGIN_SUCCESS,
   SEND_DATA_LOGIN_FAILURE,
   SEND_DATA_PROFILE_FAILURE,
   SEND_DATA_PROFILE_SUCCESS,
   GET_PAYMENT_DATA_SUCCESS,
   GET_PAYMENT_DATA_FAILURE,
   GET_ADDRESS_LIST_SUCCESS,
   GET_ADDRESS_LIST_FAILURE,
   GET_ROUTE_SUCCESS,
   GET_ROUTE_FAILURE
} from './actions';
import { INITIAL_STATE } from './store';

const rootReducer = (state = INITIAL_STATE, action) => {

   switch (action.type) {
      case ON_LOGOUT: {
         const stateCopy = {...state};

         stateCopy.currentTab = 'login';
         stateCopy.isUserDataInLocalStorage = false;
         stateCopy.addresses = [];
         stateCopy.coordinates = [];
         stateCopy.userData.isLoggedIn = false;
         stateCopy.userData.userName = '';
         stateCopy.userData.userSurname = '';
         stateCopy.userData.email = '';
         stateCopy.userData.password = '';
         stateCopy.userData.success = false;
         stateCopy.userData.token = null;
         stateCopy.userData.error = null;
         stateCopy.cardData.isPaymentData = false;
         stateCopy.cardData.id = '';
         stateCopy.cardData.cardNumber = '';
         stateCopy.cardData.validity = '';
         stateCopy.cardData.userFullName = '';
         stateCopy.cardData.CVCcode = '';
         stateCopy.cardData.success = false;
         stateCopy.cardData.error = null;
         stateCopy.from = '';
         stateCopy.to = '';
         stateCopy.route = null;

         return stateCopy;
      }
      case ON_MAKE_NEW_ORDER: {
         const stateCopy = {...state};

         stateCopy.coordinates = [];
         stateCopy.route = 'remove';

         return stateCopy;
      }
      case ON_CHANGE_STORE_ADDRESSES: {
         const stateCopy = {...state};

         stateCopy.from = action.payload.from;
         stateCopy.to = action.payload.to;

         return stateCopy;
      }
      case SEND_DATA_LOGIN_SUCCESS: {
         const stateCopy = {...state};

         stateCopy.currentTab = 'map';
         stateCopy.userData.isLoggedIn = action.payload.success;
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
         stateCopy.userData.isLoggedIn = action.payload.success;
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

         stateCopy.cardData.isPaymentData = action.payload.success;
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
      case GET_PAYMENT_DATA_SUCCESS: {
         const stateCopy = {...state};

         stateCopy.cardData.isPaymentData = true;
         stateCopy.cardData.cardNumber = action.payload.cardNumber;
         stateCopy.cardData.validity = action.payload.expiryDate;
         stateCopy.cardData.userFullName = action.payload.cardName;
         stateCopy.cardData.CVCcode = action.payload.cvc;
         stateCopy.cardData.id = action.payload.id;

         return stateCopy;
      }
      case GET_PAYMENT_DATA_FAILURE: {
         const stateCopy = {...state};

         stateCopy.cardData.success = action.payload.success;
         stateCopy.cardData.error = action.payload.error;

         return stateCopy;
      }
      case GET_ADDRESS_LIST_SUCCESS: {
         const stateCopy = {...state};

         stateCopy.addresses = action.payload.addresses;

         return stateCopy;
      }
      case GET_ADDRESS_LIST_FAILURE: {
         const stateCopy = {...state};

         return stateCopy;
      }
      case GET_ROUTE_SUCCESS: {
         const stateCopy = {...state};
         
         stateCopy.coordinates = action.payload;
         stateCopy.route = null;

         return stateCopy;
      }
      case GET_ROUTE_FAILURE: {
         const stateCopy = {...state};

         return stateCopy;
      }
      default:
         return state;
   }
};

export default rootReducer;