import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";

describe("App components", () => {
  it("renders the Header without crashing", () => {
    shallow(<Header />);
  });

  it("renders the div with img and h1 tags", () => {
    const wrapper = shallow((<Header />));
    expect(wrapper.exists('img')).toEqual(true);
    expect(wrapper.exists('h1')).toEqual(true);
  })
});
