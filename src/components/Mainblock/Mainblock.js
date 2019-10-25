import React, { Component } from 'react';
import Login from './Login/Login';
import MapBlock from './MapBlock/MapBlock';
import Profile from './Profile/Profile';

class MainBlock extends Component {
   render () {
      // console.log('Mainblock props', this.props);
      if (this.props["currnetTab"] === "login") {
         return <Login handleChangeCurrentTab={ this.props.handleChangeCurrentTab } />
      } else
      if (this.props["currnetTab"] === "profile") {
         return <Profile handleChangeCurrentTab={ this.props.handleChangeCurrentTab } handleChangePaymentData={ this.props.handleChangePaymentData } />
      } else
      if (this.props["currnetTab"] === "mapblock") {
         return <MapBlock handleChangeCurrentTab={ this.props.handleChangeCurrentTab }  paymentData={ this.props.paymentData } />
      } else {
         return null
      }
   }
}

export default MainBlock;