import React, { Component } from 'react';
import MapPopupMod from './MapPopup.module.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class MapPopup extends Component {
   static propTypes = {
      paymentData: PropTypes.bool
   };

   render () {
      // console.log('MapPopup props: ', this.props);
      if (this.props.paymentData === true) {
         return (
            <div className={ MapPopupMod.payment_data } style={{display: "none"}}></div>
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
      paymentData: state.paymentData
   };
};

const mapDsipatchToProps = dispatch => {
   return {

   }
}

export const WrappedMapPopup = connect(mapStateToProps, mapDsipatchToProps)(MapPopup);