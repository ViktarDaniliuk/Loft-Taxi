import React, { Component } from 'react';
import SigninPopupMod from './SigninPopup.module.css';

class SigninPopup extends Component {
   state = {
      email: "",
      firstName: "",
      lastName: "",
      password: ""
   }

   handleSubmit = e => {
      e.preventDefault();
      
   };

   handleEmailChange = e => {
      this.setState({ email: e.target.value });
   };

   handleFirstNameChange = e => {
      this.setState({ firstName: e.target.value });
   };

   handleLastNameChange = e => {
      this.setState({ lastName: e.target.value });
   };

   handlePasswordChange = e => {
      this.setState({ password: e.target.value });
   };

   render () {
      return (
         <div className={ SigninPopupMod.sign_in }>
            <h2>Регистрация</h2>
            <p>Уже зарегистрирован? <span onClick={ this.props.handleChangeFlag }>Войти</span></p>
            <form onSubmit={this.handleSubmit}>
               <label>
                  Адрес электронной почты
                  <input type="email" value={this.state.email} onChange={this.handleEmailChange} />
               </label>
               <div>
                  <label>
                     Имя
                     <input type="text" value={this.state.firstName} onChange={this.handleFirstNameChange} />
                  </label>
                  <label>
                     Фамилия
                     <input type="text" value={this.state.lastName} onChange={this.handleLastNameChange} />
                  </label>
               </div>
               <label>
                  Пароль
                  <input type="password" value={this.state.password} onChange={this.handlePasswordChange} />
               </label>
               <input type="submit" value="Зарегистрироваться" onClick={ () => this.props.handleChangeCurrentTab("mapblock") } />
            </form>
         </div>
      );
   }
}

export default SigninPopup;