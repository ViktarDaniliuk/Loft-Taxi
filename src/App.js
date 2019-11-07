import React, { Component } from 'react';
import './App.css';
import { WrappedHeader } from './components/Header/Header';
import { WrappedLogin } from './components/Login/Login';
import MapBlock from './components/MapBlock/MapBlock';
import Profile from './components/Profile/Profile';
import { WrappedSignup } from './components/SignUp/Signup';
import { Context } from './context';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// добавить подсветку кнопки соответствующей активной странице с помощью NavLink activeClassName

class App extends Component {
  state = {
    paymentData: false,
    userName: '',
    userSurname: '',
    email: '',
    password: ''
  };

  handleChangePaymentData = () => {
    this.setState({
      paymentData: true
    })
  };;

  // убрать обработчик события с кнопки и пользоваться только ним для всех нужд

  // поправить ситуацию с формами регистрации и входа, чистить стейт только при выходе из приложения

  componentDidMount() {
    if (!localStorage.user) return;
    this.setState({
      currentTab: 'login'
    })
  };

  render () {

    return (
      <Context.Provider value={{
        userName: this.state.userName,
        userSurname: this.state.userSurname,
        email: this.state.email,
        password: this.state.password,
        isLoggedIn: this.isLoggedIn,
        // handleLogin: this.handleLogin, 
        handleLogout: this.handleLogout, 
        handleSignUp: this.handleSignUp,
        handleSignUpSubmit: this.handleSignUpSubmit,
        handleLoginSubmit: this.handleLoginSubmit,
        handleEmailChange: this.handleEmailChange,
        handleUserNameChange: this.handleUserNameChange,
        handleUserSurnameChange: this.handleUserSurnameChange,
        handlePasswordChange: this.handlePasswordChange,
        handleGetState: this.handleGetState
      }}>
      <div className="app">
        { this.props["currentTab"] !== "login" && this.props["currentTab"] !== "signup" && <WrappedHeader /> }
        <div className="main-block">
          <Switch>
            <Route path="/signup" component={ WrappedSignup }></Route>
            <Route path="/login" render={ () => <WrappedLogin /> }></Route>
            { this.props.isLoggedIn && <Route path="/map" render={ () => <MapBlock paymentData={ this.state.paymentData } /> }></Route> }
            { this.props.isLoggedIn && <Route path="/profile" render={ () => <Profile handleChangePaymentData={ this.handleChangePaymentData } /> }></Route> }
            <Redirect to="/signup" />
          </Switch>
        </div>
      </div>
      </Context.Provider>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn,
    currentTab: state.currentTab
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export const WrappedApp = connect(mapStateToProps, mapDispatchToProps)(App);