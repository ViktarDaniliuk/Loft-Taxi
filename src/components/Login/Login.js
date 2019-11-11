import React, { Component } from 'react';
import LoginMod from './Login.module.css';
import logo from './logo.svg';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { sendDataLoginRequest } from '../../redux/actions';

class Login extends Component {
   state = {
      email: '', 
      password: ''
   };

   handleGetDateFromLocalStorage = () => {
      return JSON.parse(localStorage.getItem('user'));
   };

   onHandleLogin = (e) => {
      e.preventDefault();

      const { sendDataLoginRequest } = this.props;
      const { email, password } = this.state;
      const { email: userEmailFromLocalStorage, password: passwordFromLocalStorage } = this.handleGetDateFromLocalStorage('user');

      if (email === userEmailFromLocalStorage && password === passwordFromLocalStorage) {
         sendDataLoginRequest(email, password);
         this.setState({ 
            email: '', 
            password: '' 
         });
      } 
      return;
   };

   handleInputChange = e => {
      const name = e.target.name;
      const value = e.target.value;

      this.setState({ [name]: value });
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
                        Адрес электронной почты*
                        <input 
                           type="email" 
                           name="email" 
                           value={ this.state.userName } 
                           onChange={ this.handleInputChange }
                        />
                     </label>
                     <label>
                        Пароль*
                        <input 
                           type="password" 
                           name="password" 
                           value={ this.state.password } 
                           onChange={ this.handleInputChange } 
                        />
                     </label>
                     <input 
                        type="submit" 
                        value="Войти" 
                        onClick={ this.onHandleLogin } 
                     />
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
      sendDataLoginRequest: (email, password) => {
         dispatch(sendDataLoginRequest(email, password));
      }
   };
};

export const WrappedLogin = connect(mapStateToProps, mapDispatchToProps)(Login);