import React, { Component } from 'react';
import SignupMod from './Signup.module.css';
import logo from './logo.svg';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { sendDataSignup } from '../../redux/store';

class Signup extends Component {
   state = {
      userName: '',
      userSurname: '',
      email: '',
      password: ''
   };

   onHandleSignup = () => {
      const { sendDataSignup } = this.props;
      const { email, userName, userSurname, password } = this.state;

      if (localStorage.user) return;
      if (!this.state.email || !this.state.userName || !this.state.userSurname || !this.state.password) return;

      localStorage.setItem('user', JSON.stringify({ email: this.state.email, userName: this.state.userName, userSurname: this.state.userSurname, password: this.state.password }));
      sendDataSignup(email, userName, userSurname, password);
      this.setState({ email, userName: '', userSurname: '', password: '' });
   };

   handleEmailChange = e => {
      this.setState({ email: e.target.value });
   };
      
   handleUserNameChange = e => {
      this.setState({ userName: e.target.value });
   };
      
   handleUserSurnameChange = e => {
      this.setState({ userSurname: e.target.value });
   };
      
   handlePasswordChange = e => {
      this.setState({ password: e.target.value });
   };

   render() {
      
      return (
         <div className={ SignupMod.login }>
            <div className={ SignupMod.logo_block }>
               <img src={logo} className={ SignupMod.logo } alt="logo" />
            </div>
            <div className={ SignupMod.popup }>
               <div className={ SignupMod.sign_in }>
                  <h2>Регистрация</h2>
                  <p>Уже зарегистрирован? <span><Link to="/login">Войти</Link></span></p>
                  <form>
                     <label>
                        Адрес электронной почты
                        <input type="email" value={ this.state.email } onChange={ this.handleEmailChange } />
                     </label>
                     <div>
                        <label>
                           Имя
                           <input type="text" value={ this.state.userName } onChange={ this.handleUserNameChange } />
                        </label>
                        <label>
                           Фамилия
                           <input type="text" value={ this.state.userSurname } onChange={ this.handleUserSurnameChange } />
                        </label>
                     </div>
                     <label>
                        Пароль
                        <input type="password" value={ this.state.password } onChange={ this.handlePasswordChange } />
                     </label>
                     <Link to="/profile">
                        <input type="submit" value="Зарегистрироваться" onClick={ this.onHandleSignup } />
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
      sendDataSignup: (email, userName, userSurname, password) => {
         dispatch(sendDataSignup(email, userName, userSurname, password));
      }
   };
};

export const WrappedSignup = connect(mapStateToProps, mapDispatchToProps)(Signup);