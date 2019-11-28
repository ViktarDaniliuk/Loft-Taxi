import React, { Component } from 'react';
import MapPopupMod from './MapPopup.module.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAddressListRequest, getRouteRequest, onMakeNewOrder } from '../../../redux/actions';

export class MapPopup extends Component {
   state = {
      from: '',
      to: '',
      listName: '',
      addresses: []
   };

   static propTypes = {
      paymentData: PropTypes.bool
   };

   handleInputChange = e => {
      const name = e.target.name;
      const value = e.target.value;

      this.setState({ [name]: value });

      this.setState({
         addresses: this.handleLetterByLetterFilterAddressList(value, this.props.addresses)
      });
   };

   handleShowListFrom = () => {
      let name = 'from';
      this.handlePrepareAddressList();
      this.setState({
         addresses: this.handleFilterAddressList(name, this.props.addresses)
      });

      if (this.state.listName === 'from') {
         this.setState({
            listName: ''
         })
      } else {
         this.setState({ 
            listName: 'from' 
         });
      }
   };

   handleShowListTo = () => {
      let name = 'to';
      this.handlePrepareAddressList();
      this.setState({
         addresses: this.handleFilterAddressList(name, this.props.addresses)
      });

      if (this.state.listName === 'to') {
         this.setState({
            listName: ''
         })
      } else {
         this.setState({ 
            listName: 'to' 
         });
      }
   };

   handleSelectAddress = e => {
      this.setState({
         [this.state.listName]: e.target.innerText,
         listName: ''
      });
   };

   handlePrepareAddressList = () => {
      if (this.state.addresses.length === 0 && !this.state.from && !this.state.to) {
         this.setState({
            addresses: this.props.addresses
         })
      }
   };

   handleLetterByLetterFilterAddressList = (value, list) => {
      let copyList = list;
      let newList = [];

      copyList = list.map(item => item.toUpperCase());
      value = value.toUpperCase();

      for (let i = 0; i<copyList.length; i++) {
         if (copyList[i].indexOf(value) === 0) {
            newList.push(list[i]);
         }
      }

      return newList;
   };

   handleFilterAddressList = (name, list) => {
      let copyList = list.slice();

      if (name === 'to' && ~list.indexOf(this.state.from)) {
         let listPos = list.indexOf(this.state.from);

         copyList.splice(listPos, 1);

         if (~copyList.indexOf(this.state.to)) {
            let listPos = copyList.indexOf(this.state.to);

            copyList.splice(listPos, 1);
         }
      } else if (name === 'from' && ~list.indexOf(this.state.to)) {
         let listPos = list.indexOf(this.state.to);

         copyList.splice(listPos, 1);

         if (~copyList.indexOf(this.state.from)) {
            let listPos = copyList.indexOf(this.state.from);

            copyList.splice(listPos, 1);
         }
      }

      return copyList;
   };

   handleSendData = (e) => {
      const { getRouteRequest } = this.props;
      const { from, to } = this.state;

      e.preventDefault();

      getRouteRequest(from, to);
   };

   handleMakeNewOrder = (e) => {
      const { onMakeNewOrder } = this.props;

      e.preventDefault();

      onMakeNewOrder();
      this.setState({
         from: '',
         to: ''
      })
   };

   render () {
      if (this.props.paymentData === true && !this.props.addresses.length) {
         const { getAddressListRequest } = this.props;

         getAddressListRequest();
      }

      if (this.props.addresses && this.props.addresses.length && !this.props.coordinates.length) {

         return (
            <div className={ MapPopupMod.payment_data }>
               <div>
                  <div onClick={ this.handleShowListFrom }>
                     <input 
                        type="text" 
                        placeholder="Откуда" 
                        name="from"
                        value={ this.state.from } 
                        onChange={ this.handleInputChange }
                     />
                     <span className={ MapPopupMod.border } />
                     <span 
                        className={ MapPopupMod.arrow } 
                     />
                  </div>
                  <ul className={ MapPopupMod.addresses_from }>
                     { this.state.listName === 'from' && this.state.addresses.map((item, i) => {
                        return <li key={ i } onClick={ this.handleSelectAddress }>{ item }</li>
                     }) }
                  </ul>
               </div>
               <div>
                  <div onClick={ this.handleShowListTo }>
                     <input 
                        type="text" 
                        placeholder="Куда" 
                        name="to"
                        value={ this.state.to } 
                        onChange={ this.handleInputChange }
                     />
                     <span className={ MapPopupMod.border } />
                     <span 
                        className={ MapPopupMod.arrow } 
                     />
                  </div>
                  <ul className={ MapPopupMod.addresses_to }>
                     { this.state.listName === 'to' && this.state.addresses.map((item, i) => {
                        return <li key={ i } onClick={ this.handleSelectAddress }>{ item }</li>
                     }) }
                  </ul>
               </div>
               <button type="submit" onClick={ this.handleSendData }>Вызвать такси</button>
            </div>
         )
      };

      if (this.props.coordinates && this.props.coordinates.length) {

         return (
            <div className={ MapPopupMod.payment_data } >
               <h1>Заказ размещен</h1>
               <p>Ваше такси уже едет к Вам. Прибудет приблизительно через 10 минут.</p>
               <button type="submit" onClick={ this.handleMakeNewOrder } >Сделать новый заказ</button>
            </div>
         );
      }

      return (
         <div className={ MapPopupMod.payment_data }>
            <h1>Заполните платежные данные</h1>
            <p>Укажите информацию о банковской карте, чтобы сделать заказ.</p>
            <Link to="/profile">
               <button type="submit">Перейти в профиль</button>
            </Link>
         </div>
      );
   }
}

const mapStateToProps = state => {
   return {
      paymentData: state.cardData.isPaymentData,
      addresses: state.addresses,
      coordinates: state.coordinates,
      route: state.route
   };
};

const mapDsipatchToProps = dispatch => {
   return {
      getAddressListRequest: () => {
         dispatch(getAddressListRequest());
      },
      getRouteRequest: (from, to) => {
         dispatch(getRouteRequest(from, to));
      },
      onMakeNewOrder: () => {
         dispatch(onMakeNewOrder());
      }
   };
};

export const WrappedMapPopup = connect(mapStateToProps, mapDsipatchToProps)(MapPopup);