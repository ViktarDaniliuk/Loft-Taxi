import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form, Field } from 'react-final-form';
import ProfilePopupMod from './ProfilePopup.module.css';
import { sendPaymentDataRequest } from '../../../../redux/actions';
import CardNumberInput from './fields/CardNumberInput';
import ValidityInput from './fields/ValidityInput';
import UserCVCcodeInput from './fields/UserCVCcode';
import { history } from '../../../../history';

export class ProfilePopup extends Component {
   state = {
      sendedData: false,
      disabled: "disabled"
   };

   static propTypes = {
      sendPaymentDataRequest: PropTypes.func.isRequired,
      cardNumber: PropTypes.string,
      validity: PropTypes.string,
      userFullName: PropTypes.string,
      CVCcode: PropTypes.string
   };

   onChangePaymentData = (values) => {

      const { sendPaymentDataRequest } = this.props;
      const { cardNumber, validity, userFullName, CVCcode } = values;

      if (!values.cardNumber || !values.validity || !values.userFullName || !values.CVCcode) return;

      sendPaymentDataRequest(cardNumber, validity, userFullName, CVCcode);
      this.setState({
         sendedData: true
      });
   };

   onChangePage = () => {
      history.push('/map');
   };

   render () {
      console.log('ProfilePopup rendered: ', new Date().getHours(), ':', new Date().getMinutes(), ':', new Date().getSeconds(), ':', new Date().getMilliseconds());
      return (
         <div className={ ProfilePopupMod.profile_popup }>
            <h1>Профиль</h1>
            { this.props.isPaymentData === true && 
            this.state.sendedData === true && 
            <>
               <p>Платежные данные обновлены. Теперь вы можете заказывать такси</p>
               <button type="submit" onClick={ this.onChangePage }>
                  Перейти на карту
               </button>
            </> }
            { this.state.sendedData === false &&
            <>
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
                                    component="input"
                                    placeholder="FULL USER NAME" 
                                 />
                              </label>
                              <label>
                                 CVC:
                                 <Field 
                                    name="CVCcode"
                                    type="password"
                                    initialValue={ this.props.CVCcode }
                                    component={ UserCVCcodeInput }
                                 />
                              </label>
                           </div>
                        </div>
                        <button type="submit">
                           Сохранить
                        </button>
                     </form>
                  )}
               </Form>
            </>}
         </div>
      );
   }
};

const mapStateToProps = state => {
   return {
      cardNumber: state.cardData.cardNumber,
      validity: state.cardData.validity,
      userFullName: state.cardData.userFullName,
      CVCcode: state.cardData.CVCcode,
      isPaymentData: state.cardData.isPaymentData
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