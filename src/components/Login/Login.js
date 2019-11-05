import React, { useContext } from 'react';
import LoginMod from './Login.module.css';
import logo from './logo.svg';
import { Context } from '../../context';
import { Link } from 'react-router-dom';

const Login = () => {
   const {
      userName, password, handleLoginSubmit, handleUserNameChange, handlePasswordChange, handleLogin
   } = useContext(Context);

   return (
      <div className={ LoginMod.login }>
         <div className={ LoginMod.logo_block }>
            <img src={ logo } className={ LoginMod.logo } alt="logo" />
         </div>
         <div className={ LoginMod.popup }>
            <div className={ LoginMod.log_in }>
               <h2>Войти</h2>
               <p>Новый пользователь? <span><Link to="/signup">Зарегистрироваться</Link></span></p>
               <form onSubmit={handleLoginSubmit}>
                  <label>
                     Имя пользователя*
                     <input type="text" value={ userName } onChange={ handleUserNameChange } />
                  </label>
                  <label>
                     Пароль*
                     <input type="password" value={ password } onChange={ handlePasswordChange } />
                  </label>
                  <Link to="/profile">
                     <input type="submit" value="Войти" onClick={ () => handleLogin(userName, password) } />
                  </Link>
               </form>
            </div>
         </div>
      </div>
   );
}

export default Login;