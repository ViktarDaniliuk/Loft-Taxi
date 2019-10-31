import React, { useContext } from 'react';
import SignupMod from './Signup.module.css';
import logo from './logo.svg';
import PropTypes from 'prop-types';
import { Context } from '../../context';

const Login = () => {
   const {
      userName, userSurname, email, password, handleChangeCurrentTab, handleSignUpSubmit, handleEmailChange, handleUserNameChange, handleUserSurnameChange, handlePasswordChange, handleSignUp
   } = useContext(Context);

   return (
      <div className={ SignupMod.login }>
         <div className={ SignupMod.logo_block }>
            <img src={logo} className={ SignupMod.logo } alt="logo" />
         </div>
         <div className={ SignupMod.popup }>
            <div className={ SignupMod.sign_in }>
               <h2>Регистрация</h2>
               <p>Уже зарегистрирован? <span onClick={ () => handleChangeCurrentTab("login") }>Войти</span></p>
               <form onSubmit={ handleSignUpSubmit }>
                  <label>
                     Адрес электронной почты
                     <input type="email" value={ email } onChange={ handleEmailChange } />
                  </label>
                  <div>
                     <label>
                        Имя
                        <input type="text" value={ userName } onChange={ handleUserNameChange } />
                     </label>
                     <label>
                        Фамилия
                        <input type="text" value={ userSurname } onChange={ handleUserSurnameChange } />
                     </label>
                  </div>
                  <label>
                     Пароль
                     <input type="password" value={ password } onChange={ handlePasswordChange } />
                  </label>
                  <input type="submit" value="Зарегистрироваться" onClick={ () => handleSignUp() } />
               </form>
            </div>
         </div>
      </div>
   );
}

Login.propTypes = {
   handleChangeCurrentTab: PropTypes.func
}

export default Login;