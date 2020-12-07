import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import SelectionPage from "./selection-page";

it(
    `Should render SelectionPage`,
    () => {
      const renderer = new ShallowRenderer();

      const tree = renderer
      .render(
          <SelectionPage/>
      );

      expect(tree).toMatchSnapshot();
    }
);
