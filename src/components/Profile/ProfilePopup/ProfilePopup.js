import React, { Component, PureComponent } from 'react';
import ProfilePopupMod from './ProfilePopup.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sendPaymentDataRequest } from '../../../redux/actions';
import MaskedInput from 'react-text-mask';
import { Form, Field } from 'react-final-form';

export class ProfilePopup extends Component {
   state = {
      disabled: "disabled"
   };

   static propTypes = {
      sendPaymentDataRequest: PropTypes.func
   };

   onChangePaymentData = (values) => {

      const { sendPaymentDataRequest } = this.props;
      const { cardNumber, validity, userFullName, CVCcode } = values;

      if (!values.cardNumber || !values.validity || !values.userFullName || !values.CVCcode) return; // вместо return сделать добавление класса disabled кнопке (чтобы нельзя было ее нажать)

      sendPaymentDataRequest(cardNumber, validity, userFullName, CVCcode);
   };

   handleCheckInputStatus = () => { // переделать на работу с value
      if (this.state.cardNumber && this.state.validity && this.state.userFullName && this.state.CVCcode) this.setState({ disabled: "" });
   };

   render () {

      return (
         <div className={ ProfilePopupMod.profile_popup }>
            <h1>Профиль</h1>
            <p>Способ оплаты</p>
            <Form onSubmit= { this.onChangePaymentData }>
               {({ handleSubmit }) => (
                  <form onSubmit={ handleSubmit }>
                     <div>
                        <div>
                           <label>
                              Номер карты:
                              <Field 
                                 name="cardNumber" 
                                 initialValue={ this.props.cardNumber }
                                 component={ CardNumberInput } 
                              />
                           </label>
                           <label>
                              Срок действия:
                              <Field 
                                 name="validity" 
                                 initialValue={ this.props.validity }
                                 component={ ValidityInput } 
                              />
                           </label>
                        </div>
                        <div>
                           <label>
                              Имя владельца:
                              <Field 
                                 name="userFullName" 
                                 initialValue={ this.props.userFullName }
                                 component={ UserFullNameInput } 
                              />
                           </label>
                           <label>
                              CVC:
                              <Field 
                                 name="CVCcode"
                                 type="password"
                                 initialValue={ this.props.CVCcode }
                                 component={ UserPasswordInput }
                              />
                           </label>
                        </div>
                     </div>
                     <button 
                        type="submit" 
                        // className= { this.state.disabled }
                     >
                        Сохранить
                     </button>
                  </form>
               )}
            </Form>
         </div>
      );
   }
};

class CardNumberInput extends PureComponent {
   render() {
      return (
         <MaskedInput
            { ...this.props.input }
            placeholder="0000 0000 0000 0000"
            guide={ false }
            mask={[/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/]}
         />
      );
   }
};

class ValidityInput extends PureComponent {
   render() {
      return (
         <MaskedInput 
            { ...this.props.input }
            placeholder="00/00" 
            guide={ false }
            mask={[/\d/, /\d/, '/', /\d/, /\d/]}
         />
      );
   }
};

class UserFullNameInput extends PureComponent {
   render() {
      return (
         <input 
            { ...this.props.input }
            placeholder="FULL USER NAME" 
         />
      );
   }
};

class UserPasswordInput extends PureComponent {
   render() {
      return (
         <MaskedInput 
            { ...this.props.input }
            placeholder="***" 
            guide={ false }
            mask={[/\d/, /\d/, /\d/]}
         />
      );
   }
};

const mapStateToProps = state => {
   return {
      cardNumber: state.cardData.cardNumber,
      validity: state.cardData.validity,
      userFullName: state.cardData.userFullName,
      CVCcode: state.cardData.CVCcode
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