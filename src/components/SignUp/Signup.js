import React, { Component } from 'react';
import SignupMod from './Signup.module.css';
import logo from './logo.svg';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { sendDataSignupRequest } from '../../redux/actions';

class Signup extends Component {
   state = {
      userName: '',
      userSurname: '',
      email: '',
      password: ''
   };

   onHandleSignup = (e) => {
      e.preventDefault();

      const { sendDataSignupRequest } = this.props;
      const { email, userName, userSurname, password } = this.state;

      if (localStorage.user) return;
      if (!this.state.email || !this.state.userName || !this.state.userSurname || !this.state.password) return;

      sendDataSignupRequest(email, userName, userSurname, password);
      this.setState({ 
         email: '', 
         userName: '', 
         userSurname: '', 
         password: '' 
      });
   };

   handleInputChange = e => {
      const name = e.target.name;
      const value = e.target.value;

      this.setState({ [name]: value });
   };

   render() {
      // console.log(this.props);
      console.log('rendered Signup');
      //-----------------------------------------------------
      //-----------------------------------------------------
      // в зависимость от ответа сервера менять врутренности компонента

      const { isLoading, error } = this.props;

      if (isLoading) return <p>Ожидание ответа сервера...</p>
      if (error) return <p>Произошла сетевая ошибка</p>

      //-----------------------------------------------------
      //-----------------------------------------------------

      return (
         <div className={ SignupMod.login }>
            <div className={ SignupMod.logo_block }>
               <img src={logo} className={ SignupMod.logo } alt="logo" />
            </div>
            <div className={ SignupMod.popup }>
               <div className={ SignupMod.sign_in }>
                  <h2>Регистрация</h2>
                  <p>Уже зарегистрирован? <span><Link to="/">Войти</Link></span></p>
                  <form>
                     <label>
                        Адрес электронной почты
                        <input type="email" name="email" value={ this.state.email } onChange={ this.handleInputChange } />
                     </label>
                     <div>
                        <label>
                           Имя
                           <input type="text" name="userName" value={ this.state.userName } onChange={ this.handleInputChange } />
                        </label>
                        <label>
                           Фамилия
                           <input type="text" name="userSurname" value={ this.state.userSurname } onChange={ this.handleInputChange } />
                        </label>
                     </div>
                     <label>
                        Пароль
                        <input type="password" name="password" value={ this.state.password } onChange={ this.handleInputChange } />
                     </label>
                     <input type="submit" value="Зарегистрироваться" onClick={ this.onHandleSignup } />
                  </form>
               </div>
            </div>
         </div>
      );
   }
}

const mapStateToProps = state => {
   return {
      state
   };
};

const mapDispatchToProps = dispatch => {
   return {
      sendDataSignupRequest: (email, userName, userSurname, password) => {
         dispatch(sendDataSignupRequest(email, userName, userSurname, password));
      }
   };
};

export const WrappedSignup = connect(mapStateToProps, mapDispatchToProps)(Signup);