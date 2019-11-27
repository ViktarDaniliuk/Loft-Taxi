import React, { Component } from 'react';
import LoginMod from './Login.module.css';
import logo from './logo.svg';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Form, Field } from 'react-final-form';
import { sendDataLoginRequest } from '../../redux/actions';

class Login extends Component {
   state = {
      email: '', 
      password: ''
   };

   handleGetDateFromLocalStorage = () => {
      if (!localStorage.user) return {}; 
      return JSON.parse(localStorage.getItem('user'));
   };

   onHandleLogin = (e) => {
      e.preventDefault();
      console.log(e);

      const { sendDataLoginRequest } = this.props;
      const { email, password } = this.state;
      const { email: userEmailFromLocalStorage, password: passwordFromLocalStorage } = this.handleGetDateFromLocalStorage('user');

      if (email === userEmailFromLocalStorage && password === passwordFromLocalStorage) {
         sendDataLoginRequest(email, password);
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
                  <Form onSubmit={ this.onHandleLogin } >
                     {({ onHandleLogin }) => (
                        <form onSubmit={ onHandleLogin }>
                           <label>
                              Адрес электронной почты*
                              {/* <Field name="email" component="input"/> */}
                              <input 
                                 type="email" 
                                 name="email" 
                                 value={ this.state.userName } 
                                 onChange={ this.handleInputChange }
                              />
                           </label>
                           <label>
                              Пароль*
                              {/* <Field name="password" component="input"/> */}
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
                           {/* <button type="submit">Войти</button> */}
                        </form>
                     )}
                  </Form>
                  
               </div>
            </div>
         </div>
      );
   }
}

const mapStateToProps = state => {
   return {
      isLoggedIn: state.userData.isLoggedIn
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