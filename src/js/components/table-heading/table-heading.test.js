import React from "react";
import renderer from "react-test-renderer";
import {TableHeading} from "./table-heading";
import {noop} from "../../utils/utils";

it(
    `Should render TableHeading`,
    () => {
      const tree = renderer
      .create(
          <TableHeading
            onFilterClick={noop}
          />
      )
      .toJSON();

      expect(tree).toMatchSnapshot();
    }
);
