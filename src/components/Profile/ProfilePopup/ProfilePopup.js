import React, { Component } from 'react';
import ProfilePopupMod from './ProfilePopup.module.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProfilePopup extends Component {
   state = {
      cardNumber: "",
      validity: "",
      userName: "",
      CVCcode: ""
   };

   static propTypes = {
      handleChangePaymentData: PropTypes.func
   };

   handleSubmit = e => {
      e.preventDefault();


   };

   handleCardNumberChange = e => {
      this.setState({ cardNumber: e.target.value });
   };

   handleValidityChange = e => {
      this.setState({ validity: e.target.value });
   };

   handleUserNameChange = e => {
      this.setState({ userName: e.target.value });
   };

   handleCVCcodeChange = e => {
      this.setState({ CVCcode: e.target.value });
   };

   render () {
      // console.log('ProfilePopup props: ', this.props);
      return (
         <div className={ ProfilePopupMod.profile_popup }>
            <h1>Профиль</h1>
            <p>Способ оплаты</p>
            <form onSubmit={this.handleSubmit}>
               <div>
                  <div>
                     <label>
                        Номер карты:
                        <input type="text" value={this.state.cardNumber} onChange={this.handleCardNumberChange} placeholder="1234 5678 1234 5678" />
                     </label>
                     <label>
                        Срок действия:
                        <input type="text" value={this.state.validity} onChange={this.handleValidityChange} placeholder="00/00" />
                     </label>
                  </div>
                  <div>
                     <label>
                        Имя владельца:
                        <input type="text" value={this.state.userName} onChange={this.handleUserNameChange} placeholder="USER NAME" />
                     </label>
                     <label>
                        CVC:
                        <input type="password" value={this.state.CVCcode} onChange={this.handleCVCcodeChange} placeholder="***" />
                     </label>
                  </div>
               </div>
               <Link to="/map">
                  <input type="submit" value="Сохранить" onClick={ () => { this.props.handleChangePaymentData();
                  }} />
               </Link>
            </form>
         </div>
      );
   }
}

export default ProfilePopup;