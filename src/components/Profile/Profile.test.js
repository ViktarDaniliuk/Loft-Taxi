import React from 'react';
import Profile from './Profile';
import { shallow } from 'enzyme';
import ProfilePopup from './ProfilePopup/ProfilePopup';

it('includes ProfilePopup', () => {
   const profile = shallow(<Profile />);
   expect(profile.contains(<ProfilePopup />)).toEqual(true);
});

it('are there props', () => {
   const profile = shallow(<Profile />);
   console.log(profile.props());
   expect(profile.props('handleChangeCurrentTab')).toBeTruthy();
});