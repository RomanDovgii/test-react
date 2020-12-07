import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import Controls from "./controls";

it(
    `Should render correct controls`,
    () => {
      const renderer = new ShallowRenderer();

      const tree = renderer
      .render(
          <Controls/>
      );

      expect(tree).toMatchSnapshot();
    }
);
