import {
   ON_LOGOUT,
   SEND_DATA_SIGNUP_SUCCESS,
   SEND_DATA_SIGNUP_FAILURE,
   SEND_DATA_LOGIN_SUCCESS,
   SEND_DATA_LOGIN_FAILURE,
   SEND_DATA_PROFILE_FAILURE,
   SEND_DATA_PROFILE_SUCCESS,
   GET_PAYMENT_DATA_SUCCESS,
   GET_PAYMENT_DATA_FAILURE,
   GET_ADDRESS_LIST_SUCCESS,
   GET_ADDRESS_LIST_FAILURE
} from './actions';
import { INITIAL_STATE } from './store';

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
         stateCopy.userData.isLoggedIn = action.payload.success;
         stateCopy.userData.success = action.payload.success; // посмотреть, нужно ли это поле 
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
         stateCopy.userData.success = action.payload.success; // посмотреть, нужно ли это поле 
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
         stateCopy.cardData.success = action.payload.success; // посмотреть, нужно ли это поле

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
         stateCopy.cardData.id = action.payload.id; // посмотреть, нужно ли это поле

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

         // придумать, что делать если адреса не пришли

         return stateCopy;
      }
      default:
         return state;
   }
};

export default rootReducer;