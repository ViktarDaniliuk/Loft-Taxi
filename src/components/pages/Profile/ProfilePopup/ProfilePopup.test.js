import React from 'react';
import ReactDOM from 'react-dom';
import { ProfilePopup } from './ProfilePopup';

it('render  without crashing', () => {
   const div = document.createElement('div');
   ReactDOM.render(<ProfilePopup />, div);
   ReactDOM.unmountComponentAtNode(div);
});