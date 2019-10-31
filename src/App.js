import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import MapBlock from './components/MapBlock/MapBlock';
import Profile from './components/Profile/Profile';
import Signup from './components/SignUp/Signup';
import { Context } from './context';

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

  // при каждом запуске страницы signup запускаем функцию проверки наличия данных пользователя в localStorage
  // вытянуть стейт и обработчики полей форм из login и signin в App и передать их обратно с помощью useContext

  handleGetState = () => {
    return JSON.parse(localStorage.getItem('user'));
  };

  handleSignUp = () => {
    if (localStorage.user) return;

    localStorage.setItem('user', JSON.stringify({ userName: this.state.userName, password: this.state.password }));
    this.setState({
      currentTab: 'profile',
      userName: '',
      userSurname: '',
      email: '',
      password: ''
    })
  };

  handleChangeCurrentTab = (currTab) => {
    this.setState({
      currentTab: currTab
    });
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
        currentTab: 'profile'
      })
    }
  };

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
      currentTab: 'login'
    })
  };

  handleSignUpSubmit = e => {
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

  render () {
    // console.log('App state: ', this.state);
    const tabs = {
      signup: <Signup handleChangeCurrentTab={ this.handleChangeCurrentTab } />,
      login: <Login handleLogin={ this.handleLogin } handleChangeCurrentTab={ this.handleChangeCurrentTab } />,
      profile: <Profile handleChangeCurrentTab={ this.handleChangeCurrentTab } handleChangePaymentData={ this.handleChangePaymentData } />,
      mapblock: <MapBlock handleChangeCurrentTab={ this.handleChangeCurrentTab }  paymentData={ this.state.paymentData } />
    };

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
        handleChangeCurrentTab: this.handleChangeCurrentTab,
        handleEmailChange: this.handleEmailChange,
        handleUserNameChange: this.handleUserNameChange,
        handleUserSurnameChange: this.handleUserSurnameChange,
        handlePasswordChange: this.handlePasswordChange,
        handleGetState: this.handleGetState
      }}>
      <div className="app">
        { this.state["currentTab"] !== "login" && this.state["currentTab"] !== "signup" && <Header handleChangeCurrentTab={ this.handleChangeCurrentTab } /> }
        <div className="main-block">
          {tabs[this.state["currentTab"]]}
        </div>
      </div>
      </Context.Provider>
    );
  }
}

export default App;