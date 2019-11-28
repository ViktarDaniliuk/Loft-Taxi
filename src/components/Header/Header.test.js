import React from "react";
import ReactDOM from "react-dom";
import { Header } from "./Header";
import { BrowserRouter } from 'react-router-dom';
import { shallow, mount, render } from "enzyme";
import renderer from "react-test-renderer";

it('render without crashing', () => {
   const div = document.createElement('div');
   ReactDOM.render(
      <BrowserRouter>
         <Header />
      </BrowserRouter>,
      div
   );
   ReactDOM.unmountComponentAtNode(div);
});

// describe('Header', () => {
//    it('should have map button', () => {
//       const header = shallow(<Header />);
//       expect(header.contains('a[href="/map"]')).toEqual(true);
//    })
// })