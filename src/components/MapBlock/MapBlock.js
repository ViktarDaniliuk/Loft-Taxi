import React, { Component } from 'react';
import { WrappedMapPopup } from './MapPopup/MapPopup';
import MapBlockMod from './MapBlock.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { drawRoute, removeRoute } from './helper';

export class MapBlock extends Component {
   static propTypes = {
      paymentData: PropTypes.bool
   };

   state = {
      map: null
   }

   componentDidMount() {
      let mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
      // let options = {
      //    enableHighAccuracy: true,
      //    timeout: 5000,
      //    maximumAge: 0
      // };
      // let latitude;
      // let longitude;
      // const success = (pos) => {
      //    var crd = pos.coords;

      //    latitude = crd.latitude;
      //    longitude = crd.longitude;
      // }

      // const error = (err) => {
      //    console.warn(`ERROR(${err.code}): ${err.message}`);
      // }
      
      // navigator.geolocation.getCurrentPosition(success, error, options);

      mapboxgl.accessToken = 'pk.eyJ1IjoidmlrYXRyIiwiYSI6ImNrMmZ3ajIxdzA0b3QzcG12ejRnM3I2MmIifQ.BTSCAyI0WPqr9LtTl5qpwQ';
      this.map = new mapboxgl.Map({
         container: 'map',
         center: [21.033, 52.225],
         zoom: 12,
         style: 'mapbox://styles/mapbox/streets-v11'
      });

      let nav = new mapboxgl.NavigationControl();

      this.map.addControl(nav, 'top-right');

      // map.addControl(new mapboxgl.GeolocateControl({
      //    positionOptions: {
      //       enableHighAccuracy: true
      //    },
      //    trackUserLocation: true
      // }));

      this.map.on('load', () => {
         console.log('Map was load!');
         // map.setCenter([longitude, latitude]);
         // добавить в стейт поле loaded: false
         // сделать компоненту с прелоадером, позиционировать абсолютно по центру экрана
         // менять поле loaded на true 
      //    var popup = new mapboxgl.Popup({closeOnClick: false})
      //       .setLngLat([longitude, latitude])
      //       .setHTML('<p>You are here</p>')
      //       .addTo(map);
      });

      // if (this.props.coordinates.length) {
      //    console.log(this.props.coordinates);
      //    console.log(this.props.coordinates.length);
      //    drawRoute(map, this.propst.coordinates);
      // }
   };

   render () {
      if (this.props.coordinates && this.props.coordinates.length) {
         drawRoute(this.map, this.props.coordinates);
      }

      if (this.props.route === 'remove') {
         removeRoute(this.map);
      }
      
      return (
         <div className={ MapBlockMod.map }>
            <WrappedMapPopup />
            <div id="map">

            </div>
         </div>
      );
   }
}

const mapStateToProps = state => {

   return {
      coordinates: state.coordinates,
      route: state.route
   };
};

const mapDsipatchToProps = dispatch => {
   return {
      
   };
};

export const WrappedMapBlock = connect(mapStateToProps, mapDsipatchToProps)(MapBlock);