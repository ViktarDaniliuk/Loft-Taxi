import React, { Component } from 'react';
import LoginMod from './Login.module.css';
import logo from './logo.svg';
import PropTypes from 'prop-types';

class Login extends Component {
   state = {
      userName: "",
      password: ""
   }

   static propTypes = {
      handleChangeCurrentTab: PropTypes.func
   }

   handleSubmit = e => {
      e.preventDefault();


   };

   handleUserNameChange = e => {
      this.setState({ userName: e.target.value });
   };

   handlePasswordChange = e => {
      this.setState({ password: e.target.value });
   };

   render () {
      return (
         <div className={ LoginMod.login }>
            <div className={ LoginMod.logo_block }>
               <img src={logo} className={ LoginMod.logo } alt="logo" />
            </div>
            <div className={ LoginMod.popup }>
               <div className={ LoginMod.log_in }>
                  <h2>Войти</h2>
                  <p>Новый пользователь? <span onClick={ () => this.props.handleChangeCurrentTab("signup") }>Зарегистрироваться</span></p>
                  <form onSubmit={this.handleSubmit}>
                     <label>
                        Имя пользователя*
                        <input type="text" value={this.state.userName} onChange={this.handleUserNameChange} />
                     </label>
                     <label>
                        Пароль*
                        <input type="password" value={this.state.password} onChange={this.handlePasswordChange} />
                     </label>
                     <input type="submit" value="Войти" onClick={ () => this.props.handleChangeCurrentTab("mapblock") } />
                  </form>
               </div>
            </div>
         </div>
      );
   }
}

export default Login;