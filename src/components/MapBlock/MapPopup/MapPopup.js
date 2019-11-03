import React, { Component } from 'react';
import MapPopupMod from './MapPopup.module.css';
import PropTypes from 'prop-types';

class MapPopup extends Component {
   static propTypes = {
      handleChangeCurrentTab: PropTypes.func,
      paymentData: PropTypes.bool
   };

   render () {
      if (this.props.paymentData === true) {
         return (
            <div className={ MapPopupMod.payment_data } style={{display: "none"}}></div>
         )
      };
      return (
         <div className={ MapPopupMod.payment_data }>
            <h1>Заполните платежные данные</h1>
            <p>Укажите информацию о банковской карте, чтобы сделать заказ.</p>
            <input type="submit" value="Перейти в профиль" onClick={ () => this.props.handleChangeCurrentTab("profile") } />
         </div>
      );
   }
}

export default MapPopup;