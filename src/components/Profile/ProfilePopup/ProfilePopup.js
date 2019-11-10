import React, { Component } from 'react';
import ProfilePopupMod from './ProfilePopup.module.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleChangePaymentData } from '../../../redux/actions';

class ProfilePopup extends Component {
   state = {
      cardNumber: "",
      validity: "",
      userFullName: "",
      CVCcode: ""
   };

   static propTypes = {
      handleChangePaymentData: PropTypes.func
   };

   onChangePaymentData = () => {
      const { handleChangePaymentData } = this.props;
      const { cardNumber, validity, userFullName, CVCcode } = this.state;

      if (!this.state.cardNumber || !this.state.validity || !this.state.userFullName || !this.state.CVCcode) return;

      handleChangePaymentData(cardNumber, validity, userFullName, CVCcode);
      this.setState({
         cardNumber: '',
         validity: '',
         userFullName: '',
         CVCcode: ''
      })
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

   handleUserFullNameChange = e => {
      this.setState({ userFullName: e.target.value });
   };

   handleCVCcodeChange = e => {
      this.setState({ CVCcode: e.target.value });
   };

   render () {
      // console.log('ProfilePopup props: ', this.props);
      console.log('rendered ProfilePopup');
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
                        <input type="text" value={this.state.userName} onChange={this.handleUserFullNameChange} placeholder="USER NAME" />
                     </label>
                     <label>
                        CVC:
                        <input type="password" value={this.state.CVCcode} onChange={this.handleCVCcodeChange} placeholder="***" />
                     </label>
                  </div>
               </div>
               <Link to="/map">
                  <input type="submit" value="Сохранить" onClick={ this.onChangePaymentData } />
               </Link>
            </form>
         </div>
      );
   }
}

const mapStateToProps = state => {
   return {

   };
};

const mapDispatchToProps = dispatch => {
   return {
      handleChangePaymentData: (cardNumber, validity, userFullName, CVCcode) => {
         dispatch(handleChangePaymentData(cardNumber, validity, userFullName, CVCcode));
      }
   };
};

export const WrappedProfilePopup = connect(mapStateToProps, mapDispatchToProps)(ProfilePopup);