import React from 'react';
import ReactDOM from 'react-dom';
import { MapPopup } from './MapPopup';
import { BrowserRouter } from 'react-router-dom';

it('render without crashing', () => {
   const div = document.createElement('div');
   ReactDOM.render(
      <BrowserRouter>
         <MapPopup />
      </BrowserRouter>,
      div
   );
   ReactDOM.unmountComponentAtNode(div);
});