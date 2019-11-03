import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../../../App';
import ProfilePopup from './ProfilePopup';
import renderer from 'react-test-renderer';

it('change state - cardNumber', () => {
   const profilePopup = shallow(<ProfilePopup />);
   profilePopup.setState({
      cardNumber: "1234567891234567"
   });
   expect(profilePopup.state('cardNumber')).toBe("1234567891234567");
});

it('change state - validity', () => {
   const profilePopup = shallow(<ProfilePopup />);
   profilePopup.setState({
      validity: "02/22"
   });
   expect(profilePopup.state('validity')).toBe("02/22");
});

it('change state - userName', () => {
   const profilePopup = shallow(<ProfilePopup />);
   profilePopup.setState({
      userName: "Viktar"
   });
   expect(profilePopup.state('userName')).toBe("Viktar");
});

it('change state - CVCcode', () => {
   const profilePopup = shallow(<ProfilePopup />);
   profilePopup.setState({
      CVCcode: "123"
   });
   expect(profilePopup.state('CVCcode')).toBe("123");
});


// it('number of props', () => {
//    const profilePopup = mount(<ProfilePopup />);
//    console.log(profilePopup.find('[type="submit"]').props());
//    expect(profilePopup.find('[type="submit"]').props()).;
// });


// it('-------------------------', () => {
//    const app = mount(<App />);
//    const profilePopup = mount(<ProfilePopup />);
//    console.log(app.state('currentTab'))
//    console.log(profilePopup.find('input[type="submit"]').prop('onClick'));
//    profilePopup.find('input[type="submit"]').simulate('click');
//    console.log(app.state('currentTab'))
//    expect(app.state('currentTab')).toBe('mapblock');
// });


it('ProfilePopup Snapshot', () => {
   const tree = renderer.create(<ProfilePopup />).toJSON;
   expect(tree).toMatchShapshot();
})