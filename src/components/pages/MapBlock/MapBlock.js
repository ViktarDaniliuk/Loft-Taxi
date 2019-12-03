import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { WrappedMapPopup } from './MapPopup/MapPopup';
import MapBlockMod from './MapBlock.module.css';
import { drawRoute, removeRoute } from './helper';

export class MapBlock extends Component {
   static propTypes = {
      coordinates: PropTypes.array.isRequired,
      route: PropTypes.oneOf([null, 'remove'])
   };

   static defaultProps = {
      coordinates: [],
      route: null
   }

   state = {
      map: null
   }

   componentDidMount() {
      let mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
      let center = [21.033, 52.225];
      let zoom = 12;

      if (this.props.coordinates.length) {
         center = this.props.coordinates[0];
         zoom = 15;
      }

      mapboxgl.accessToken = 'pk.eyJ1IjoidmlrYXRyIiwiYSI6ImNrMmZ3ajIxdzA0b3QzcG12ejRnM3I2MmIifQ.BTSCAyI0WPqr9LtTl5qpwQ';
      this.map = new mapboxgl.Map({
         container: 'map',
         center: center,
         zoom: zoom,
         style: 'mapbox://styles/mapbox/streets-v11'
      });

      let nav = new mapboxgl.NavigationControl();

      this.map.addControl(nav, 'top-right');

      this.map.on('load', () => {
         if (this.props.coordinates && this.props.coordinates.length && this.map.painter.id !== 'route')
         drawRoute(this.map, this.props.coordinates);
      })
   };

   componentWillUnmount() {
      if (this.map.painter && this.map.painter.id === 'route') removeRoute(this.map);
   };

   render () {
      console.log('MapBlock rendered: ', new Date().getHours(), ':', new Date().getMinutes(), ':', new Date().getSeconds(), ':', new Date().getMilliseconds());
      
      if (this.map && this.props.coordinates && this.props.coordinates.length) {
         drawRoute(this.map, this.props.coordinates);
      }

      if (this.props.route === 'remove' && this.map && this.map.painter && this.map.painter.id === 'route') {
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

export const WrappedMapBlock = connect(mapStateToProps, null)(MapBlock);