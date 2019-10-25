import React, { Component } from 'react';
// import './Login.css';
import Popup from './Popup/Popup';
import LoginMod from './Login.module.css';
import Logo from './Logo/Logo.js';

class Login extends Component {
   render () {
      return (
         <div className={ LoginMod.login }>
            <div className={ LoginMod.logo }>
               <Logo />
            </div>
            <div className={ LoginMod.popup }>
               <Popup handleChangeCurrentTab={ this.props.handleChangeCurrentTab } />
            </div>
         </div>
      );
   }
}

export default Login;