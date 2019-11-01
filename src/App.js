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

  handleDefineStartPage = () => {
    if (!localStorage.user) return;
    this.setState({
      currentTab: 'login'
    })
  };

  handleGetState = () => {
    return JSON.parse(localStorage.getItem('user'));
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

  handleChangeCurrentTab = (currTab) => {
    this.setState({
      currentTab: currTab
    });

    if (this.state.currentTab === 'login' || this.state.currentTab === 'signup') {
      this.setState({
        userName: '',
        userSurname: '',
        email: '',
        password: ''
      })
    }
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
      currentTab: 'login'
    })
  };

  handleSignUpSubmit = e => {
    e.preventDefault();
          
  };

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
    this.handleDefineStartPage();
  };

  render () {
    // console.log('App state: ', this.state);
    const tabs = {
      signup: <Signup handleChangeCurrentTab={ this.handleChangeCurrentTab } />,
      login: <Login />,
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
        handleSignUpSubmit: this.handleSignUpSubmit,
        handleLoginSubmit: this.handleLoginSubmit,
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