export const SEND_DATA_LOGIN = 'SEND_DATA_LOGIN';
export const ON_LOGOUT = 'ON_LOGOUT';
export const SEND_DATA_SIGNUP = 'SEND_DATA_SIGNUP';
export const SEND_DATA_PROFILE = 'SEND_DATA_PROFILE';

export const sendDataSignup = (newEmail, newUserName, newUserSurName, newPassword) => {

   return {
      type: SEND_DATA_SIGNUP,
      payload: {
         userEmail: newEmail,
         userName: newUserName,
         userSurname: newUserSurName,
         password: newPassword
      }
   };
};

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