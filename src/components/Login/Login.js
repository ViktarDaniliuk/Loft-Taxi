import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Field } from 'react-final-form';
import LoginMod from './Login.module.css';
import logo from './logo.svg';
import { sendDataLoginRequest } from '../../redux/actions';

export class Login extends Component {
   static propTypes = {
      sendDataLoginRequest: PropTypes.func.isRequired,
      isLoggedIn: PropTypes.bool.isRequired
   };

   static defaultProps = {
      isLoggedIn: false
   };

   onHandleLogin = (values) => {
      const { sendDataLoginRequest } = this.props;
      const { email, password } = values;

      if (email && password) {
         sendDataLoginRequest(email, password);
      } 
      return;
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
                  <p>
                     Новый пользователь? 
                     <span>
                        <Link to="/signup"> 
                           Зарегистрироваться
                        </Link>
                     </span>
                  </p>
                  <Form onSubmit={ this.onHandleLogin } >
                     {({ handleSubmit }) => (
                        <form onSubmit={ handleSubmit }>
                           <label>
                              Адрес электронной почты*
                              <Field 
                                 name="email" 
                                 component="input"
                              />
                           </label>
                           <label>
                              Пароль*
                              <Field 
                                 name="password" 
                                 type="password"
                                 component="input"
                              />
                           </label>
                           <button type="submit">Войти</button>
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