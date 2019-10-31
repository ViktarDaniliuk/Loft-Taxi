import React, { useContext } from 'react';
import LoginMod from './Login.module.css';
import logo from './logo.svg';
import PropTypes from 'prop-types';
import { Context } from '../../context';

// class Login extends Component {
//    state = {
//       userName: "",
//       password: ""
//    }

//    static propTypes = {
//       handleChangeCurrentTab: PropTypes.func
//    }

//    handleSubmit = e => {
//       e.preventDefault();


//    };

//    handleUserNameChange = e => {
//       this.setState({ userName: e.target.value });
//    };

//    handlePasswordChange = e => {
//       this.setState({ password: e.target.value });
//    };

//    render () {
//       return (
//          <div className={ LoginMod.login }>
//             <div className={ LoginMod.logo_block }>
//                <img src={logo} className={ LoginMod.logo } alt="logo" />
//             </div>
//             <div className={ LoginMod.popup }>
//                <div className={ LoginMod.log_in }>
//                   <h2>Войти</h2>
//                   <p>Новый пользователь? <span onClick={ () => this.props.handleChangeCurrentTab("signup") }>Зарегистрироваться</span></p>
//                   <form onSubmit={this.handleSubmit}>
//                      <label>
//                         Имя пользователя*
//                         <input type="text" value={this.state.userName} onChange={this.handleUserNameChange} />
//                      </label>
//                      <label>
//                         Пароль*
//                         <input type="password" value={this.state.password} onChange={this.handlePasswordChange} />
//                      </label>
//                      <input type="submit" value="Войти" onClick={ () => this.props.handleLogin(this.state.userName, this.state.password) } />
//                   </form>
//                </div>
//             </div>
//          </div>
//       );
//    }
// }

const Login = () => {
   const {
      userName, password, handleChangeCurrentTab, handleLoginSubmit, handleUserNameChange, handlePasswordChange, handleLogin
   } = useContext(Context);

   return (
      <div className={ LoginMod.login }>
         <div className={ LoginMod.logo_block }>
            <img src={ logo } className={ LoginMod.logo } alt="logo" />
         </div>
         <div className={ LoginMod.popup }>
            <div className={ LoginMod.log_in }>
               <h2>Войти</h2>
               <p>Новый пользователь? <span onClick={ () => handleChangeCurrentTab("signup") }>Зарегистрироваться</span></p>
               <form onSubmit={handleLoginSubmit}>
                  <label>
                     Имя пользователя*
                     <input type="text" value={ userName } onChange={ handleUserNameChange } />
                  </label>
                  <label>
                     Пароль*
                     <input type="password" value={ password } onChange={ handlePasswordChange } />
                  </label>
                  <input type="submit" value="Войти" onClick={ () => handleLogin(userName, password) } />
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