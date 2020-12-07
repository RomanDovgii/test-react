import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import TablePage from "./table-page";
import {noop} from "../../utils/utils";

it(
    `Should render TablePage`,
    () => {
      const renderer = new ShallowRenderer();

      const tree = renderer
      .render(
          <TablePage
            onFilterClick={noop}
          />
      );

      expect(tree).toMatchSnapshot();
    }

);
