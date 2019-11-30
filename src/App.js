import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import { WrappedHeader } from './components/Header/Header';
import { WrappedLogin } from './components/Login/Login';
import { WrappedMapBlock } from './components/MapBlock/MapBlock';
import Profile from './components/Profile/Profile';
import { WrappedSignup } from './components/SignUp/Signup';

export class App extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    currentTab: PropTypes.string.isRequired,
    isUserDataInLocalStorage: PropTypes.bool.isRequired
  };

  static defaultProps = {
    isLoggedIn: false,
    currentTab: "signup",
    isUserDataInLocalStorage: false
  }

  render () {

    return (
      <div className="app">
        { this.props["currentTab"] !== "login" && this.props["currentTab"] !== "signup" && <WrappedHeader /> }
        <div className="main-block">
          <Switch>
            <Route path="/" exact render={ () => <WrappedLogin /> }></Route>
            <Route path="/signup" component={ WrappedSignup }></Route>
            { this.props.isLoggedIn && <Route path="/map" render={ () => <WrappedMapBlock/> }></Route> }
            { this.props.isLoggedIn && <Route path="/profile" render={ () => <Profile /> }></Route> }
            { this.props.isUserDataInLocalStorage === true && <Redirect to="/" /> }
            <Redirect to="/signup" />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.userData.isLoggedIn,
    currentTab: state.currentTab,
    isUserDataInLocalStorage: state.isUserDataInLocalStorage
  };
};

export const WrappedApp = connect(mapStateToProps, null)(App);