import React, { Component } from 'react';
import LoginPopupMod from './LoginPopup.module.css';

class LoginPopup extends Component {
   state = {
      userName: "",
      password: ""
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
         <div className={ LoginPopupMod.log_in }>
            <h2>Войти</h2>
            <p>Новый пользователь? <span onClick={ this.props.handleChangeFlag }>Зарегистрироваться</span></p>
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
      );
   }
}

export default LoginPopup;