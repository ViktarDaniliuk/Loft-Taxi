import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import MapBlock from './components/MapBlock/MapBlock';
import Profile from './components/Profile/Profile';
import Signup from './components/SignUp/Signup';
import { Context } from './context';
import { Route, Switch } from 'react-router-dom';

// добавить подсветку кнопки соответствующей активной странице

class App extends Component {
  state = {
    currentTab: "signup",
    paymentData: false,
    isLoggedIn: false,
    userName: '',
    userSurname: '',
    email: '',
    password: ''
  };

  handleGetState = () => {
    return JSON.parse(localStorage.getItem('user'));
  };

  handleSignUp = () => {
    console.log('handleSignUp');
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

  handleLogin = (name, pass) => {
    const { userName, password } = this.handleGetState();

    if (userName === name && password === pass) {
      this.setState({
        currentTab: 'profile',
        isLoggedIn: true
      })
    }

    this.setState({
      userName: '',
      password: ''
    })
  };

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
      // currentTab: 'login'
    })
  };

  handleSignUpSubmit = e => {
    e.preventDefault();
          
  }; 
  // убрать обработчик события с кнопки и пользоваться только ним для всех нужд

  // поправить ситуацию с формами регистрации и входа, чистить стейт только при выходе из приложения

  handleLoginSubmit = e => {
    e.preventDefault();
          
  };
    
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
    // console.log('App state: ', this.state);

    return (
      <Context.Provider value={{
        userName: this.state.userName,
        userSurname: this.state.userSurname,
        email: this.state.email,
        password: this.state.password,
        isLoggedIn: this.isLoggedIn,
        handleLogin: this.handleLogin, 
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
        { this.state["currentTab"] !== "login" && this.state["currentTab"] !== "signup" && <Header /> }
        <div className="main-block">
          <Switch>
            <Route path="/signup" component={ Signup }></Route>
            <Route path="/login" component={ Login }></Route>
            <Route path="/map" render={ () => <MapBlock paymentData={ this.state.paymentData } /> }></Route>
            { this.state.isLoggedIn && <Route path="/profile" render={ () => <Profile handleChangePaymentData={ this.handleChangePaymentData } /> }></Route> }
          </Switch>
        </div>
      </div>
      </Context.Provider>
    );
  }
}

export default App;