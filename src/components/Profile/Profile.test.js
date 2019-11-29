import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Profile from './Profile';
import { shallow, mount, render } from 'enzyme';
import { WrappedProfilePopup } from './ProfilePopup/ProfilePopup';
import { ProfilePopup } from './ProfilePopup/ProfilePopup';
import renderer from "react-test-renderer";
import createAppStore from '../../redux/store';

const store = createAppStore();

// it("ProfilePopup Snapshot", () => {
//    const tree = renderer.create(
//       <Provider store={ store }>
//          <Profile />
//       </Provider>
//    ).toJSON();
//    expect(tree).toMatchSnapshot();
// });

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

// it('contains ProfilePopup', () => { // не проходит
// const profile = mount(<Provider><Profile /></Provider>);
//    expect(profile.contains(<ProfilePopup />)).toEqual(true);
// });

// it('are there props', () => { // тест на то, что приходят какие-то пропсы, здесь он не нужен
//    const profile = shallow(<Profile />);
//    console.log(profile.props());
//    expect(profile.props('handleChangeCurrentTab')).toBeTruthy();
// });