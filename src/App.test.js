import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { shallow, mount } from 'enzyme';
import { WrappedHeader } from './components/Header/Header';
import { WrappedLogin } from './components/Login/Login';
import { BrowserRouter } from 'react-router-dom';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>, 
//     div
//   );
//   ReactDOM.unmountComponentAtNode(div);
// });

it('contains WrappedHeader', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.contains(<WrappedHeader />)).toEqual(true);
})

// it('render mount', () => {
//   const wrapper = mount(<BrowserRouter><App /></BrowserRouter>);
//   expect(wrapper.contains(<WrappedLogin />)).toEqual(true);
// })