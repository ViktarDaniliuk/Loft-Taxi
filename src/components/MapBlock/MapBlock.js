import React, { Component } from 'react';
import MapPopup from './MapPopup/MapPopup';
import MapBlockMod from './MapBlock.module.css';
import PropTypes from 'prop-types';

class MapBlock extends Component {
   static propTypes = {
      handleChangeCurrentTab: PropTypes.func,
      paymentData: PropTypes.bool
   };

   handleLoad() {
      window.ymaps.ready(() => {
         this.localMap = new window.ymaps.Map('map', {center: this.state.center, zoom: 9}, {
            searchControlProvider: 'yandex#search'});
      });
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