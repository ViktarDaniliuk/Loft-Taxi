import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { shallow } from 'enzyme';
import { WrappedHeader } from './components/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import createAppStore from './redux/store';

const store = createAppStore();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={ store }>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>, 
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('contains WrappedHeader', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.contains(<WrappedHeader />)).toEqual(true);
});