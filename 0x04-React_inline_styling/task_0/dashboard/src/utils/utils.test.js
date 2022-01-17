/**
* @jest-environment jsdom
*/

import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  //cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("returns the current year", () => {
  act(() => {
    render(getFullYear(), container);
  });
  expect(container.textContent).toBe("2021");
});

it("getFooterCopy returns the correct string when the argument is true or false", () => {
  act(() => {
    render(getFooterCopy(true), container);
  });
  expect(container.textContent).toBe("Holberton School");

  act(() => {
    render(getFooterCopy(false), container);
  });
  expect(container.textContent).toBe("Holberton School main dashboard");
});

it("returns correct string when function is called", () => {
  act(() => {
    render(getLatestNotification(), container);
    expect(container.textContent).toBe("<strong>Urgent requirement</strong> - complete by EOD");
  });
});
