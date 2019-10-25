import React, { Component } from 'react';
import LoginPopup from './LoginPopup/LoginPopup';
import SigninPopup from './SigninPopup/SigninPopup';

class Popup extends Component {
   state = {
      flag: false,
   };

   handleChangeFlag = (e) => {
      e.preventDefault();
      
      this.setState({ flag: !this.state.flag })
   };

   render () {
      // console.log('Popup props: ', this.props);
      if (this.state.flag) {
         return <LoginPopup 
            handleChangeFlag={ this.handleChangeFlag } 
            handleChangeCurrentTab={ this.props.handleChangeCurrentTab } />
      } else {
         return <SigninPopup 
            handleChangeFlag={ this.handleChangeFlag } 
            handleChangeCurrentTab={ this.props.handleChangeCurrentTab } />
      }
   }
}

export default Popup;