export const ON_LOGOUT = 'ON_LOGOUT';
export const SEND_DATA_SIGNUP_REQUEST = 'SEND_DATA_SIGNUP_REQUEST';
export const SEND_DATA_SIGNUP_SUCCESS = 'SEND_DATA_SIGNUP_SUCCESS';
export const SEND_DATA_SIGNUP_FAILURE = 'SEND_DATA_SIGNUP_FAILURE';
export const SEND_DATA_LOGIN_REQUEST = 'SEND_DATA_LOGIN_REQUEST';
export const SEND_DATA_LOGIN_SUCCESS = 'SEND_DATA_LOGIN_SUCCESS';
export const SEND_DATA_LOGIN_FAILURE = 'SEND_DATA_LOGIN_FAILURE';
export const SEND_DATA_PROFILE = 'SEND_DATA_PROFILE';
export const SEND_DATA_PROFILE_REQUEST = 'SEND_DATA_PROFILE_REQUEST';
export const SEND_DATA_PROFILE_SUCCESS = 'SEND_DATA_PROFILE_SUCCESS';
export const SEND_DATA_PROFILE_FAILURE = 'SEND_DATA_PROFILE_FAILURE';
export const GET_PAYMENT_DATA_REQUEST = 'GET_PAYMENT_DATA_REQUEST';
export const GET_PAYMENT_DATA_SUCCESS = 'GET_PAYMENT_DATA_SUCCESS';
export const GET_PAYMENT_DATA_FAILURE = 'GET_PAYMENT_DATA_FAILURE';
export const GET_ADDRESS_LIST_REQUEST = 'GET_ADDRESS_LIST_REQUEST';
export const GET_ADDRESS_LIST_SUCCESS = 'GET_ADDRESS_LIST_SUCCESS';
export const GET_ADDRESS_LIST_FAILURE = 'GET_ADDRESS_LIST_FAILURE';
export const GET_ROUTE_REQUEST = 'GET_ROUTE_REQUEST';
export const GET_ROUTE_SUCCESS = 'GET_ROUTE_SUCCESS';
export const GET_ROUTE_FAILURE = 'GET_ROUTE_FAILURE';
export const ON_MAKE_NEW_ORDER = 'ON_MAKE_NEW_ORDER';

export const onLogout = () => {
   
   return {
      type: ON_LOGOUT
   };
};

export const onMakeNewOrder = () => {
   
   return {
      type: ON_MAKE_NEW_ORDER
   };
};

export const sendDataSignupRequest = (newEmail, newUserName, newUserSurName, newPassword) => {

   return {
      type: SEND_DATA_SIGNUP_REQUEST,
      payload: {
         userEmail: newEmail,
         userName: newUserName,
         userSurname: newUserSurName,
         password: newPassword
      }
   };
};

export const sendDataSignupSuccess = (data) => {

   return {
      type: SEND_DATA_SIGNUP_SUCCESS,
      payload: { ...data }
   };
};

export const sendDataSignupFailure = (error) => {
   // если ответ succes: false, то показываем сообщенние пользователю об ошибке

   return {
      type: SEND_DATA_SIGNUP_FAILURE,
      payload: { ...error }
   };
};

export const sendDataLoginRequest = (newEmail, newPassword) => {

   return {
      type: SEND_DATA_LOGIN_REQUEST,
      payload: {
         userEmail: newEmail,
         password: newPassword
      }
   };
};

export const sendDataLoginSuccess = (data) => {

   return {
      type: SEND_DATA_LOGIN_SUCCESS,
      payload: { ...data }
   };
};

export const sendDataLoginFailure = (error) => {

   return {
      type: SEND_DATA_LOGIN_FAILURE,
      payload: { ...error }
   };
};

export const sendPaymentDataRequest = (cardNumber, validity, userFullName, CVCcode) => {

   return {
      type: SEND_DATA_PROFILE_REQUEST,
      payload: {
         cardNumber: cardNumber,
         validity: validity,
         userFullName: userFullName,
         CVCcode: CVCcode
      }
   };
};

export const sendPaymentDataSuccess = (data) => {

   return {
      type: SEND_DATA_PROFILE_SUCCESS,
      payload: { ...data }
   };
};

export const sendPaymentDataFailure = (error) => {

   return {
      type: SEND_DATA_PROFILE_FAILURE,
      payload: { ...error }
   };
};

export const getPaymentDataRequest = (token) => {

   return {
      type: GET_PAYMENT_DATA_REQUEST,
      payload: {
         token: token
      }
   };
};

export const getPaymentDataSuccess = (data) => {

   return {
      type: GET_PAYMENT_DATA_SUCCESS,
      payload: { ...data }
   };
};

export const getPaymentDataFailure = (error) => {

   return {
      type: GET_PAYMENT_DATA_FAILURE,
      payload: { ...error }
   };
};

export const getAddressListRequest = () => {

      return {
         type: GET_ADDRESS_LIST_REQUEST
      };
   };
   
   export const getAddressListSuccess = (data) => {

      return {
         type: GET_ADDRESS_LIST_SUCCESS,
         payload: { ...data }
      };
   };
   
   export const getAddressListFailure = () => {
   
      return {
         type: GET_ADDRESS_LIST_FAILURE
      };
   };

   export const getRouteRequest = (from, to) => {

      return {
         type: GET_ROUTE_REQUEST,
         payload: {
            address1: from,
            address2: to
         }
      };
   };
   
   export const getRouteSuccess = (data) => {

      return {
         type: GET_ROUTE_SUCCESS,
         payload: [ ...data ]
      };
   };
   
   export const getRouteFailure = () => {

      return {
         type: GET_ROUTE_FAILURE
      };
   };