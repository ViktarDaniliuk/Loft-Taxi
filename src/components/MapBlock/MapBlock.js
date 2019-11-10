import React, { Component } from 'react';
import { WrappedMapPopup } from './MapPopup/MapPopup';
import MapBlockMod from './MapBlock.module.css';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

class MapBlock extends Component {
   static propTypes = {
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
      // console.log('MapBlock props: ', this.props);
      console.log('rendered MapBlock');
      return (
         <div className={ MapBlockMod.map }>
            <WrappedMapPopup paymentData={ this.props.paymentData } />
            <div id="map">

            </div>
         </div>
      );
   }
}

export default MapBlock;