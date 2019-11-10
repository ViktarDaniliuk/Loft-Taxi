export const SEND_DATA_LOGIN = 'SEND_DATA_LOGIN';
export const ON_LOGOUT = 'ON_LOGOUT';
export const SEND_DATA_PROFILE = 'SEND_DATA_PROFILE';
export const SEND_DATA_SIGNUP = 'SEND_DATA_SIGNUP';
export const SEND_DATA_SIGNUP_REQUEST = 'SEND_DATA_SIGNUP-REQUEST';
export const SEND_DATA_SIGNUP_SUCCESS = 'SEND_DATA-SIGNUP-SUCCESS';
export const SEND_DATA_SIGNUP_FAILURE = 'SEND_DATA-SIGNUP-FAILURE';


export const sendDataSignup = (newEmail, newUserName, newUserSurName, newPassword) => {

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

//------------------------------------------

export const sendDataSignupRequest = (newEmail, newUserName, newUserSurName, newPassword) => {
   // отправляем данные на сервер
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

export const sendDataSignupSuccess = (newEmail, newUserName, newUserSurName, newPassword) => {
   // если ответ succes: true, то добавляем данные в state
   return {
      type: SEND_DATA_SIGNUP_SUCCESS,
      payload: {
         userEmail: newEmail,
         userName: newUserName,
         userSurname: newUserSurName,
         password: newPassword
      }
   };
};

export const sendDataSignupFailure = (newEmail, newUserName, newUserSurName, newPassword) => {
   // если ответ succes: false, то показываем сообщенние пользователю об ошибке
   return {
      type: SEND_DATA_SIGNUP_FAILURE,
      payload: {
         userEmail: newEmail,
         userName: newUserName,
         userSurname: newUserSurName,
         password: newPassword
      }
   };
};

//------------------------------------------

export const sendDataLogin = (newUserName, newPassword) => {

   return {
      type: SEND_DATA_LOGIN,
      payload: {
         userName: newUserName,
         password: newPassword
      }
   };
};

export const onLogout = () => {
   
   return {
      type: ON_LOGOUT
   };
};

export const handleChangePaymentData = (cardNumber, validity, userFullName, CVCcode) => {

   return {
      type: SEND_DATA_PROFILE,
      payload: {
         cardNumber: cardNumber,
         validity: validity,
         userFullName: userFullName,
         CVCcode: CVCcode
      }
   };
};