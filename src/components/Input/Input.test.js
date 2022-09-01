import React from "react";
import { shallow } from "enzyme";
import { Input } from "./Input";
import "@testing-library/jest-dom";

const setup = (props = {}) => shallow(<Input {...props} />);
const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

describe("Input Component tests", () => {
  test("Input element exists", () => {
    const wrapper = setup({ className: "className", name: "input" });
    expect(wrapper.exists()).toBe(true);
  });

  test("Children props displays button text", () => {
    const wrapper = setup({ className: "className", name: "input" });
    const input = findByTestAttr(wrapper, "input");
    expect(input.hasClass("className")).toBe(true);
  });
});
