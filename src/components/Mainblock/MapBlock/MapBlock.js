import React, { Component } from 'react';
import { YMaps, Map } from 'react-yandex-maps';
import MapPopup from './MapPopup/MapPopup';
import MapBlockMod from './MapBlock.module.css';

class MapBlock extends Component {
   handleLoad() {
      window.ymaps.ready(() => {
         console.log("handleLoad")
         this.localMap = new window.ymaps.Map('map', {center: this.state.center, zoom: 9}, {
            searchControlProvider: 'yandex#search'});
      });
   }

   render () {
      return (
         <YMaps>
            <div className={ MapBlockMod.map }>
               <MapPopup handleChangeCurrentTab={ this.props.handleChangeCurrentTab }  paymentData={ this.props.paymentData } />
               <Map 
                  defaultState={{
                     center: [52.237750, 21.018374], zoom: 12,
                     controls: ['zoomControl', 'fullscreenControl']
                  }} 
                     modules={['control.ZoomControl', 'control.FullscreenControl']}
               >
               </Map>
            </div>
         </YMaps>
      );
   }
}

export default MapBlock;