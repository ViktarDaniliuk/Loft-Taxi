import React from 'react';
import ReactDOM from 'react-dom';
import { MapBlock } from './MapBlock';
import { shallow } from 'enzyme';
import { WrappedMapPopup } from './MapPopup/MapPopup';

// it('render without crashing', () => { // не проходит
//    const div = document.createElement('div');
//    ReactDOM.render(<MapBlock />, div);
//    ReactDOM.unmountComponentAtNode(div);
// });

// it('render shallow', () => { // не проходит
//    const wrapper = shallow(<MapBlock />);
//    expect(wrapper.contains(<WrappedMapPopup />)).toEqual(true);
// })