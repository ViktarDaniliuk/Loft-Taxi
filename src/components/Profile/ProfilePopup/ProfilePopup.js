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

   handleInputChange = e => {
      const name = e.target.name;
      const value = e.target.value;

      this.setState({ [name]: value });
   };

   render () {
      // console.log('ProfilePopup props: ', this.props);
      console.log('rendered ProfilePopup');
      return (
         <div className={ ProfilePopupMod.profile_popup }>
            <h1>Профиль</h1>
            <p>Способ оплаты</p>
            <form onSubmit={ this.handleSubmit }>
               <div>
                  <div>
                     <label>
                        Номер карты:
                        <input type="text" name="cardNumber" value={ this.state.cardNumber } onChange={ this.handleInputChange } placeholder="1234 5678 1234 5678" />
                     </label>
                     <label>
                        Срок действия:
                        <input type="text" name="validity" value={ this.state.validity } onChange={ this.handleInputChange } placeholder="00/00" />
                     </label>
                  </div>
                  <div>
                     <label>
                        Имя владельца:
                        <input type="text" name="userFullName" value={ this.state.userFullName } onChange={ this.handleInputChange } placeholder="FULL USER NAME" />
                     </label>
                     <label>
                        CVC:
                        <input type="password" name="CVCcode" value={ this.state.CVCcode } onChange={ this.handleInputChange } placeholder="***" />
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