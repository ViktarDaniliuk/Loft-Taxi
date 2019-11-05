import React from "react";
import { shallow, mount, render } from "enzyme";
import Header from "./Header";
import renderer from "react-test-renderer";

describe('Header', () => {
   it('should have map button', () => {
      const header = shallow(<Header />);
      expect(header.contains('a[href="/map"]')).toEqual(true);
   })
})