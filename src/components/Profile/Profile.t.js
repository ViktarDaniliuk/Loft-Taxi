import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './Profile';
import { shallow } from 'enzyme';
import { ProfilePopup } from './ProfilePopup/ProfilePopup';

it('render without crashing', () => {
   const div = document.createElement('div');
   ReactDOM.render(<Profile />, div);
   ReactDOM.unmountComponentAtNode(div);
});

// it('includes ProfilePopup', () => {
//    const profile = shallow(<Profile />);
//    expect(profile.contains(<ProfilePopup />)).toEqual(true);
// });

// it('are there props', () => { // тест на то, что приходят какие-то пропсы, здесь он не нужен
//    const profile = shallow(<Profile />);
//    console.log(profile.props());
//    expect(profile.props('handleChangeCurrentTab')).toBeTruthy();
// });