import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import MainBlock from './components/Mainblock/Mainblock';

class App extends Component {
  state = {
    currentTab: "login",
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
  }

  render () {
    // console.log('App state: ', this.state);
    return (
      <div className="app">
        { this.state["currentTab"] !== "login" && <Header handleChangeCurrentTab={ this.handleChangeCurrentTab } /> }
        <div className="main-block">
          <MainBlock 
            currnetTab={ this.state.currentTab }
            paymentData={ this.state.paymentData }
            handleChangeCurrentTab={ this.handleChangeCurrentTab }
            handleChangePaymentData={ this.handleChangePaymentData } />
        </div>
      </div>
    );
  }
}

// mainblock удалить и впихнуть все в App через объект с ключами
// отдельно сделать компоненту входа и компоненту регистрации


export default App;