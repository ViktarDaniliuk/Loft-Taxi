import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import MapBlock from './components/MapBlock/MapBlock';
import Profile from './components/Profile/Profile';
import Signup from './components/SignUp/Signup';

class App extends Component {
  state = {
    currentTab: "signup",
    paymentData: false
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

  render () {
    // console.log('App state: ', this.state);
    const tabs = {
      signup: <Signup handleChangeCurrentTab={ this.handleChangeCurrentTab } />,
      login: <Login handleChangeCurrentTab={ this.handleChangeCurrentTab } />,
      profile: <Profile handleChangeCurrentTab={ this.handleChangeCurrentTab } handleChangePaymentData={ this.handleChangePaymentData } />,
      mapblock: <MapBlock handleChangeCurrentTab={ this.handleChangeCurrentTab }  paymentData={ this.state.paymentData } />
    };

    return (
      <div className="app">
        { this.state["currentTab"] !== "login" && this.state["currentTab"] !== "signup" && <Header handleChangeCurrentTab={ this.handleChangeCurrentTab } /> }
        <div className="main-block">
          {tabs[this.state["currentTab"]]}
        </div>
      </div>
    );
  }
}

export default App;