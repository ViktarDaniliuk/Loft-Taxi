import React, { useContext, Component } from 'react';
import SignupMod from './Signup.module.css';
import logo from './logo.svg';
import PropTypes from 'prop-types';
import { Context } from '../../context';

// class Login extends Component {
//    state = {
//       email: "",
//       firstName: "",
//       lastName: "",
//       password: ""
//    }

//    static propTypes = {
//       handleChangeCurrentTab: PropTypes.func
//    }

//    handleSubmit = e => {
//       e.preventDefault();
      
//    };

//    handleEmailChange = e => {
//       this.setState({ email: e.target.value });
//    };

//    handleFirstNameChange = e => {
//       this.setState({ firstName: e.target.value });
//    };

//    handleLastNameChange = e => {
//       this.setState({ lastName: e.target.value });
//    };

//    handlePasswordChange = e => {
//       this.setState({ password: e.target.value });
//    };

//    render () {
//       return (
//          <div className={ SignupMod.login }>
//             <div className={ SignupMod.logo_block }>
//                <img src={logo} className={ SignupMod.logo } alt="logo" />
//             </div>
//             <div className={ SignupMod.popup }>
//                <div className={ SignupMod.sign_in }>
//                   <h2>Регистрация</h2>
//                   <p>Уже зарегистрирован? <span onClick={ () => this.props.handleChangeCurrentTab("login") }>Войти</span></p>
//                   <form onSubmit={this.handleSubmit}>
//                      <label>
//                         Адрес электронной почты
//                         <input type="email" value={this.state.email} onChange={this.handleEmailChange} />
//                      </label>
//                      <div>
//                         <label>
//                            Имя
//                            <input type="text" value={this.state.firstName} onChange={this.handleFirstNameChange} />
//                         </label>
//                         <label>
//                            Фамилия
//                            <input type="text" value={this.state.lastName} onChange={this.handleLastNameChange} />
//                         </label>
//                      </div>
//                      <label>
//                         Пароль
//                         <input type="password" value={this.state.password} onChange={this.handlePasswordChange} />
//                      </label>
//                      <input type="submit" value="Зарегистрироваться" onClick={ () => this.props.handleChangeCurrentTab("mapblock") } />
//                   </form>
//                </div>
//             </div>
//          </div>
//       );
//    }
// }

const Login = () => {
   const {
      userName, userSurname, email, password, handleChangeCurrentTab, handleSignUpSubmit, handleEmailChange, handleUserNameChange, handleUserSurnameChange, handlePasswordChange, handleSignUp
   } = useContext(Context);

   return (
      <div className={ SignupMod.login }>
         <div className={ SignupMod.logo_block }>
            <img src={logo} className={ SignupMod.logo } alt="logo" />
         </div>
         <div className={ SignupMod.popup }>
            <div className={ SignupMod.sign_in }>
               <h2>Регистрация</h2>
               <p>Уже зарегистрирован? <span onClick={ () => handleChangeCurrentTab("login") }>Войти</span></p>
               <form onSubmit={ handleSignUpSubmit }>
                  <label>
                     Адрес электронной почты
                     <input type="email" value={ email } onChange={ handleEmailChange } />
                  </label>
                  <div>
                     <label>
                        Имя
                        <input type="text" value={ userName } onChange={ handleUserNameChange } />
                     </label>
                     <label>
                        Фамилия
                        <input type="text" value={ userSurname } onChange={ handleUserSurnameChange } />
                     </label>
                  </div>
                  <label>
                     Пароль
                     <input type="password" value={ password } onChange={ handlePasswordChange } />
                  </label>
                  <input type="submit" value="Зарегистрироваться" onClick={ () => handleSignUp() } />
               </form>
            </div>
         </div>
      </div>
   );
}

Login.propTypes = {
   handleChangeCurrentTab: PropTypes.func
}

export default Login;