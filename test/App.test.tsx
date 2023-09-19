import renderer from "react-test-renderer";

import React from "react";
import App from "../App"; // Adjust the import to match the actual path to your App component

describe("<App />", () => {
  it("renders without crashing", () => {
    const rendered = renderer.create(<App />).toJSON();
    expect(rendered).toBeTruthy();
  });

  it("has 1 child", () => {
    const tree = renderer.create(<App />).toJSON();
    if (tree && "children" in tree && tree.children) {
      expect(tree.children.length).toBe(1);
    } else {
      fail("Tree or tree.children is null or undefined");
    }
  });

  // Add more tests as needed
});
