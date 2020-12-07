import React from "react";
import renderer from "react-test-renderer";
import Loading from "./loading";

it(
    `Should render correct Loading`,
    () => {
      const tree = renderer
      .create(
          <Loading/>
      )
      .toJSON();

      expect(tree).toMatchSnapshot();
    }
);
