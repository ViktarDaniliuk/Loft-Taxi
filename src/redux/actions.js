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

export const onLogout = () => {
   
   return {
      type: ON_LOGOUT
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
   console.log('sendDataLoginSuccess data: ', data);
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