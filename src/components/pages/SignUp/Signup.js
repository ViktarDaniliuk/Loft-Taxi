import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Field } from 'react-final-form';
import SignupMod from './Signup.module.css';
import logo from './logo.svg';
import { sendDataSignupRequest } from '../../../redux/actions';

export class Signup extends Component {
   static propTypes = {
      sendDataSignupRequest: PropTypes.func.isRequired
   }

   onHandleSignup = (values) => {
      const { sendDataSignupRequest } = this.props;
      const { email, userName, userSurname, password } = values;

      if (localStorage.user) return;
      if (!values.email || !values.userName || !values.userSurname || !values.password) return;

      sendDataSignupRequest(email, userName, userSurname, password);
   };

   render() {
      console.log('Signup rendered: ', new Date().getHours(), ':', new Date().getMinutes(), ':', new Date().getSeconds(), ':', new Date().getMilliseconds());
      const { isLoading, error } = this.props;

      if (isLoading) return <p>Ожидание ответа сервера...</p>
      if (error) return <p>Произошла сетевая ошибка</p>

      return (
         <div className={ SignupMod.login }>
            <div className={ SignupMod.logo_block }>
               <img src={logo} className={ SignupMod.logo } alt="logo" />
            </div>
            <div className={ SignupMod.popup }>
               <div className={ SignupMod.sign_up }>
                  <h2>Регистрация</h2>
                  <p>
                     Уже зарегистрирован? 
                     <span>
                        <Link to="/">
                           Войти
                        </Link>
                     </span>
                  </p>
                  <Form onSubmit={ this.onHandleSignup } >
                     {({ handleSubmit }) => (
                        <form onSubmit={ handleSubmit }>
                           <label>
                              Адрес электронной почты
                              <Field
                                 name="email"
                                 component="input"
                              />
                           </label>
                           <div>
                              <label>
                                 Имя
                                 <Field
                                    name="userName"
                                    component="input"
                                 />
                              </label>
                              <label>
                                 Фамилия
                                 <Field
                                    name="userSurname"
                                    component="input"
                                 />
                              </label>
                           </div>
                           <label>
                              Пароль
                              <Field
                                 name="password"
                                 component="input"
                              />
                           </label>
                           <button type="submit">
                              Зарегистрироваться
                           </button>
                        </form>
                     )}
                  </Form>
               </div>
            </div>
         </div>
      );
   }
}

const mapDispatchToProps = dispatch => {
   return {
      sendDataSignupRequest: (email, userName, userSurname, password) => {
         dispatch(sendDataSignupRequest(email, userName, userSurname, password));
      }
   };
};

export const WrappedSignup = connect(null, mapDispatchToProps)(Signup);