import React, { Component } from 'react';
import MapPopup from './MapPopup/MapPopup';
import MapBlockMod from './MapBlock.module.css';
import PropTypes from 'prop-types';

class MapBlock extends Component {
   static propTypes = {
      handleChangeCurrentTab: PropTypes.func,
      paymentData: PropTypes.bool
   };

   componentDidMount() {
      let mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

      mapboxgl.accessToken = 'pk.eyJ1IjoidmlrYXRyIiwiYSI6ImNrMmZ3ajIxdzA0b3QzcG12ejRnM3I2MmIifQ.BTSCAyI0WPqr9LtTl5qpwQ';
      let map = new mapboxgl.Map({
         container: 'map',
         center: [21.033, 52.225],
         zoom: 12,
         style: 'mapbox://styles/mapbox/streets-v11'
      });

      map.on('load', () => {
         console.log('Map was load!');
         // добавить в стейт поле loaded: false
         // сделать компоненту с прелоадером, позиционировать абсолютно по центру экрана
         // менять поле loaded на true 
      })
   };

   render () {
      return (
         <div className={ MapBlockMod.map }>
            <MapPopup handleChangeCurrentTab={ this.props.handleChangeCurrentTab }  paymentData={ this.props.paymentData } />
            <div id="map">

            </div>
         </div>
      );
   }
}

export default MapBlock;