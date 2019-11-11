export const SEND_DATA_LOGIN = 'SEND_DATA_LOGIN';
export const ON_LOGOUT = 'ON_LOGOUT';
export const SEND_DATA_PROFILE = 'SEND_DATA_PROFILE';
export const SEND_DATA_SIGNUP = 'SEND_DATA_SIGNUP';
export const SEND_DATA_SIGNUP_REQUEST = 'SEND_DATA_SIGNUP_REQUEST';
export const SEND_DATA_SIGNUP_SUCCESS = 'SEND_DATA_SIGNUP_SUCCESS';
export const SEND_DATA_SIGNUP_FAILURE = 'SEND_DATA_SIGNUP_FAILURE';
export const SEND_DATA_LOGIN_REQUEST = 'SEND_DATA_LOGIN_REQUEST';
export const SEND_DATA_LOGIN_SUCCESS = 'SEND_DATA_LOGIN_SUCCESS';
export const SEND_DATA_LOGIN_FAILURE = 'SEND_DATA_LOGIN_FAILURE';


// export const sendDataSignup = (newEmail, newUserName, newUserSurName, newPassword) => {

//    return {
//       type: SEND_DATA_SIGNUP,
//       payload: {
//          userEmail: newEmail,
//          userName: newUserName,
//          userSurname: newUserSurName,
//          password: newPassword
//       }
//    };
// };

//------------------------------------------
//
//

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

export const sendDataSignupSuccess = (data) => {
   // если ответ succes: true, то добавляем данные в state
   return {
      type: SEND_DATA_SIGNUP_SUCCESS,
      payload: {
         userEmail: data.email,
         userName: data.userName,
         userSurname: data.userSurname,
         password: data.password,
         success: data.success,
         token: data.token
      }
   };
};

export const sendDataSignupFailure = (error) => {
   // если ответ succes: false, то показываем сообщенние пользователю об ошибке
   console.log(error);
   return {
      type: SEND_DATA_SIGNUP_FAILURE,
      payload: {
         success: error.success,
         error: error.error
      }
   };
};

//
//
//------------------------------------------

// export const sendDataLogin = (newEmail, newPassword) => {

//    return {
//       type: SEND_DATA_LOGIN,
//       payload: {
//          email: newEmail,
//          password: newPassword
//       }
//    };
// };

//------------------------------------------
//
//

export const sendDataLoginRequest = (newEmail, newPassword) => {
   console.log('actions.js: ', newEmail, ' ', newPassword);

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
      payload: {
         success: data.success,
         token: data.token
      }
   };
};

export const sendDataLoginFailure = (error) => {

   return {
      type: SEND_DATA_LOGIN_FAILURE,
      payload: {
         success: error.success,
         error: error.error
      }
   };
};

//
//
//------------------------------------------

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