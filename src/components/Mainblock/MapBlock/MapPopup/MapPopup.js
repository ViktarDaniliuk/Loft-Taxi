import React, { Component } from 'react';
import MapPopupMod from './MapPopup.module.css';

class MapPopup extends Component {
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
            <input type="submit" value="Перейти в профиль" onClick={ () => this.props.handleChangeCurrentTab("profile") } />
         </div>
      );
   }
}

export default MapPopup;