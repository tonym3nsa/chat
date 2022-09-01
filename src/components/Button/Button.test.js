import React from "react";
import { shallow } from "enzyme";
import { Button } from "./Button";

const setup = (props = {}) => shallow(<Button {...props} />);
const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

describe("Button tests", () => {
  test("Button exists", () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.exists()).toBe(true);
  });

  test("Children props displays button text", () => {
    const wrapper = setup({ children: "Button 01" });
    const button = findByTestAttr(wrapper, "button");
    expect(button.text()).toBe("Button 01");
  });

  test("className props adds class attribute to button element", () => {
    const wrapper = setup({ children: "Button 01", className: "className" });
    const button = findByTestAttr(wrapper, "button");
    expect(button.hasClass("className")).toBe(true);
  });
});
