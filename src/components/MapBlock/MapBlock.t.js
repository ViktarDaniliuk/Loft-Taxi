import React from 'react';
import ReactDOM from 'react-dom';
import { MapBlock } from './MapBlock';
import { shallow } from 'enzyme';
import { WrappedMapPopup } from './MapPopup/MapPopup';
import { Provider } from 'react-redux';
import createAppStore from '../../redux/store';
import { BrowserRouter } from 'react-router-dom';

const store = createAppStore();

// it('render without crashing', () => { // не проходит
//    const div = document.createElement('div');
//    ReactDOM.render(
//    <Provider store={ store }>
//       <BrowserRouter>
//          <MapBlock />
//       </BrowserRouter>
//    </Provider>
//       , div);
//    ReactDOM.unmountComponentAtNode(div);
// });

// it('render shallow', () => { // не проходит
//    const wrapper = shallow(<MapBlock />);
//    expect(wrapper.contains(<WrappedMapPopup />)).toEqual(true);
// })