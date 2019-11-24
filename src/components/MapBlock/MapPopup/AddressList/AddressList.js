import React, { Component } from 'react';
import AddressListMod from './AddressList.module.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAddressListRequest } from '../../../redux/actions';

class AddressList extends Component {
   static propTypes = {
      
   };

   render () {
      if (this.props.paymentData === true && !this.props.addresses.length) {
         const { getAddressListRequest } = this.props;

         getAddressListRequest();
      }

      if (this.props.addresses.length) {
         const { addresses } = this.props;

         return (
            <div className={ AddressListMod.payment_data }>
               <div>
                  <select id="from" placeholder="Откуда">
                     { addresses.map((address, i) => <option key={i}>{ address }
                  </option> ) }
                  </select>
                  <select id="to" placeholder="Куда">
                     { addresses.map((address, i) => <option key={i}>{ address }
                  </option> ) }
                  </select>
               </div>
               <input 
                  type="submit" 
                  value="Вызвать такси" 
               />
            </div>
         )
      };
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

export const WrappedAddressList = connect(mapStateToProps, mapDsipatchToProps)(AddressList);