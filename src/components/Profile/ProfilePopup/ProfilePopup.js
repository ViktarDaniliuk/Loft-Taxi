import React, { Component } from 'react';
import ProfilePopupMod from './ProfilePopup.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sendPaymentDataRequest } from '../../../redux/actions';
import MaskedInput from 'react-text-mask';

class ProfilePopup extends Component {
   state = {
      cardNumber: "",
      validity: "",
      userFullName: "",
      CVCcode: ""
   };

   static propTypes = {
      sendPaymentDataRequest: PropTypes.func
   };

   onChangePaymentData = (e) => {
      const { sendPaymentDataRequest } = this.props;
      const { cardNumber, validity, userFullName, CVCcode } = this.state;

      e.preventDefault();

      if (!this.state.cardNumber || !this.state.validity || !this.state.userFullName || !this.state.CVCcode) return;

      sendPaymentDataRequest(cardNumber, validity, userFullName, CVCcode);
      this.setState({
         cardNumber: '',
         validity: '',
         userFullName: '',
         CVCcode: ''
      })
   };

   handleInputChange = e => {
      const name = e.target.name;
      const value = e.target.value;

      this.setState({ [name]: value });
   };

   render () {
      
      return (
         <div className={ ProfilePopupMod.profile_popup }>
            <h1>Профиль</h1>
            <p>Способ оплаты</p>
            <form onSubmit={ this.handleSubmit }>
               <div>
                  <div>
                     <label>
                        Номер карты:
                        <MaskedInput 
                           type="text" 
                           name="cardNumber" 
                           value={ this.state.cardNumber } 
                           onChange={ this.handleInputChange } 
                           placeholder="1234 5678 1234 5678"
                           mask={[/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/]}
                        />
                     </label>
                     <label>
                        Срок действия:
                        <MaskedInput 
                           type="text" 
                           name="validity" 
                           value={ this.state.validity } 
                           onChange={ this.handleInputChange } 
                           placeholder="00/00" 
                           mask={[/\d/, /\d/, '/', /\d/, /\d/]}
                        />
                     </label>
                  </div>
                  <div>
                     <label>
                        Имя владельца:
                        <input 
                           type="text" 
                           name="userFullName" 
                           value={ this.state.userFullName } 
                           onChange={ this.handleInputChange } 
                           placeholder="FULL USER NAME" 
                        />
                     </label>
                     <label>
                        CVC:
                        <MaskedInput 
                           type="password" 
                           name="CVCcode" 
                           value={ this.state.CVCcode } 
                           onChange={ this.handleInputChange } 
                           placeholder="***" 
                           mask={[/\d/, /\d/, /\d/]}
                        />
                     </label>
                  </div>
               </div>
               <input 
                  type="submit" 
                  value="Сохранить" 
                  onClick={ this.onChangePaymentData } 
               />
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
      sendPaymentDataRequest: (cardNumber, validity, userFullName, CVCcode) => {
         dispatch(sendPaymentDataRequest(cardNumber, validity, userFullName, CVCcode));
      }
   };
};

export const WrappedProfilePopup = connect(mapStateToProps, mapDispatchToProps)(ProfilePopup);