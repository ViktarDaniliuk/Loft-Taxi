import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Profile from './Profile';
import { shallow } from 'enzyme';
import { WrappedProfilePopup } from './ProfilePopup/ProfilePopup';
import createAppStore from '../../redux/store';

const store = createAppStore();

it('render without crashing', () => { // не проходит
   const div = document.createElement('div');
   ReactDOM.render(
      <Provider store={ store }>
         <Profile />
      </Provider>, 
      div
   );
   ReactDOM.unmountComponentAtNode(div);
});

it('contains WrappedProfilePopup', () => {
   const profile = shallow(<Profile />);
   expect(profile.contains(<WrappedProfilePopup />)).toEqual(true);
});