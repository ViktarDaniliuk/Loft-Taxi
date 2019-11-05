import React, { Component } from 'react';
import MapPopupMod from './MapPopup.module.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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

export default MapPopup;