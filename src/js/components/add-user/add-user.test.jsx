import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import {AddUser} from "./add-user";
import {noop} from "../../utils/utils";

it(
    `Should render correct closed AddUser with locked button`,
    () => {
      const renderer = new ShallowRenderer();

      const tree = renderer
      .render(
          <AddUser
            onAddClick={noop}
            onCloseClick={noop}
            onInputChange={noop}
            onAddToTableClick={noop}
            isOpen={false}
            areFilled={false}
            isLoading={true}
          />
      );

      expect(tree).toMatchSnapshot();
    }
);

it(
    `Should render correct open AddUser with locked button`,
    () => {
      const renderer = new ShallowRenderer();

      const tree = renderer
      .render(
          <AddUser
            onAddToTableClick={noop}
            isOpen={true}
            areFilled={false}
            isLoading={true}
            onAddClick={noop}
            onCloseClick={noop}
            onInputChange={noop}
          />
      );

      expect(tree).toMatchSnapshot();
    }
);

it(
    `Should render correct open AddUser with unlocked button`,
    () => {
      const renderer = new ShallowRenderer();

      const tree = renderer
      .render(
          <AddUser
            onAddToTableClick={noop}
            isOpen={true}
            areFilled={true}
            isLoading={true}
            onAddClick={noop}
            onCloseClick={noop}
            onInputChange={noop}
          />
      );

      expect(tree).toMatchSnapshot();
    }
);
