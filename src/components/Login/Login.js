import React, { useContext } from 'react';
import LoginMod from './Login.module.css';
import logo from './logo.svg';
import { Context } from '../../context';

const Login = () => {
   const {
      userName, password, handleChangeCurrentTab, handleLoginSubmit, handleUserNameChange, handlePasswordChange, handleLogin
   } = useContext(Context);

   return (
      <div className={ LoginMod.login }>
         <div className={ LoginMod.logo_block }>
            <img src={ logo } className={ LoginMod.logo } alt="logo" />
         </div>
         <div className={ LoginMod.popup }>
            <div className={ LoginMod.log_in }>
               <h2>Войти</h2>
               <p>Новый пользователь? <span onClick={ () => handleChangeCurrentTab("signup") }>Зарегистрироваться</span></p>
               <form onSubmit={handleLoginSubmit}>
                  <label>
                     Имя пользователя*
                     <input type="text" value={ userName } onChange={ handleUserNameChange } />
                  </label>
                  <label>
                     Пароль*
                     <input type="password" value={ password } onChange={ handlePasswordChange } />
                  </label>
                  <input type="submit" value="Войти" onClick={ () => handleLogin(userName, password) } />
               </form>
            </div>
         </div>
      </div>
   );
}

export default Login;