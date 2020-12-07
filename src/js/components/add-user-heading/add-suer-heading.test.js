import React from "react";
import renderer from "react-test-renderer";
import AddUserHeading from "./add-user-heading";

it(
    `Should render correct AddUserHeading`,
    () => {
      const tree = renderer
      .create(
          <AddUserHeading/>
      )
      .toJSON();

      expect(tree).toMatchSnapshot();
    }
);
