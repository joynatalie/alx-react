import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer";
import { getFullYear, getFooterCopy } from "../utils/utils";

describe("App components", () => {
  it("renders the Footer without crashing", () => {
    shallow(<Footer />);
  });
  it("renders the div with the text Copyright", () => {
    const wrapper = shallow((<Footer />));
    expect(wrapper.contains(
      <footer className="App-footer">
      Copyright {getFullYear()} - {getFooterCopy(true)}
      </footer>
    )).toEqual(true)
  });
});
