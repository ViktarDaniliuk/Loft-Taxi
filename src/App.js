import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { WrappedLogin } from './components/Login/Login';
import MapBlock from './components/MapBlock/MapBlock';
import Profile from './components/Profile/Profile';
import Signup from './components/SignUp/Signup';
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

  handleSignUp = () => {
    if (localStorage.user) return;
    if (!this.state.email || !this.state.userName || !this.state.userSurname || !this.state.password) return;

    localStorage.setItem('user', JSON.stringify({ email: this.state.email, userName: this.state.userName, userSurname: this.state.userSurname, password: this.state.password }));
    this.setState({
      currentTab: 'profile',
      userName: '',
      userSurname: '',
      email: '',
      password: ''
    })
  };

  handleChangePaymentData = () => {
    this.setState({
      paymentData: true
    })
  };

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
      currentTab: 'login'
    })
  };

  // убрать обработчик события с кнопки и пользоваться только ним для всех нужд

  // поправить ситуацию с формами регистрации и входа, чистить стейт только при выходе из приложения
    
  handleEmailChange = e => {
    this.setState({ email: e.target.value });
  };
    
  handleUserNameChange = e => {
    this.setState({ userName: e.target.value });
  };
    
  handleUserSurnameChange = e => {
    this.setState({ userSurname: e.target.value });
  };
    
  handlePasswordChange = e => {
    this.setState({ password: e.target.value });
  };

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
        { this.props["currentTab"] !== "login" && this.props["currentTab"] !== "signup" && <Header /> }
        <div className="main-block">
          <Switch>
            <Route path="/signup" component={ Signup }></Route>
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