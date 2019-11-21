import React, { Component } from 'react';
import MapPopupMod from './MapPopup.module.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAddressListRequest } from '../../../redux/actions';

class MapPopup extends Component {
   static propTypes = {
      paymentData: PropTypes.bool
   };

   render () {
      if (this.props.paymentData === true && !this.props.addresses.length) {
         const { getAddressListRequest } = this.props;

         getAddressListRequest();
      }

      if (this.props.addresses.length) {
         const { addresses } = this.props;

         return (
            <div className={ MapPopupMod.payment_data }>
               <div>
                  <select id="from" placeholder="Откуда">
                     { addresses.map((address, i) => <option id={i}>{ address }</option> ) }
                  </select>
                  <select id="to" placeholder="Куда">
                     { addresses.map((address, i) => <option id={i}>{ address }</option> ) }
                  </select>
               </div>
               <input 
                  type="submit" 
                  value="Вызвать такси" 
               />
            </div>
         )
      };
      return (
         <div className={ MapPopupMod.payment_data }>
            <h1>Заполните платежные данные</h1>
            <p>Укажите информацию о банковской карте, чтобы сделать заказ.</p>
            <Link to="/profile">
               <input type="submit" value="Перейти в профиль" />
            </Link>
         </div>
      );
   }
}

const mapStateToProps = state => {
   return {
      paymentData: state.cardData.isPaymentData,
      addresses: state.addresses
   };
};

const mapDsipatchToProps = dispatch => {
   return {
      getAddressListRequest: () => {
         dispatch(getAddressListRequest());
      }
   };
};

export const WrappedMapPopup = connect(mapStateToProps, mapDsipatchToProps)(MapPopup);