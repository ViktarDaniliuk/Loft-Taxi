import React, { Component } from 'react';
import LoginMod from './Login.module.css';
import logo from './logo.svg';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { sendDataLogin } from '../../redux/store';

class Login extends Component {
   state = {
      userName: '', 
      password: ''
   };

   onHandleLogin = () => {
      const { sendDataLogin } = this.props;
      const { userName, password } = this.state;

      sendDataLogin(userName, password);
      this.setState({ userName: '', password: '' });
   };

   handleUserNameChange = e => {
      this.setState({ userName: e.target.value });
   };
      
   handlePasswordChange = e => {
      this.setState({ password: e.target.value });
   };

   render() {
      return (
         <div className={ LoginMod.login }>
            <div className={ LoginMod.logo_block }>
               <img src={ logo } className={ LoginMod.logo } alt="logo" />
            </div>
            <div className={ LoginMod.popup }>
               <div className={ LoginMod.log_in }>
                  <h2>Войти</h2>
                  <p>Новый пользователь? <span><Link to="/signup">Зарегистрироваться</Link></span></p>
                  <form>
                     <label>
                        Имя пользователя*
                        <input type="text" value={ this.state.userName } onChange={ this.handleUserNameChange } />
                     </label>
                     <label>
                        Пароль*
                        <input type="password" value={ this.state.password } onChange={ this.handlePasswordChange } />
                     </label>
                     <Link to="/profile">
                        <input type="submit" value="Войти" onClick={ this.onHandleLogin } />
                     </Link>
                  </form>
               </div>
            </div>
         </div>
      );
   }
}

const mapStateToProps = state => {
   return {
      
   };
};

const mapDispatchToProps = dispatch => {
   return {
      sendDataLogin: (userName, password) => {
         dispatch(sendDataLogin(userName, password));
      }
   };
};

export const WrappedLogin = connect(mapStateToProps, mapDispatchToProps)(Login);