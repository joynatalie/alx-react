import React from "react";
import { shallow } from "enzyme";
import Login from "./Login";

describe("App components", () => {
  it("renders the Login without crashing", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toBe(true);
  });
  it("renders two input and label tags", () => {
    const wrapper = shallow((<Login />));
    expect(wrapper.find('label')).toHaveLength(2);
    expect(wrapper.find('label')).toHaveLength(2);
  });
});
