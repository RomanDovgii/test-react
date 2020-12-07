import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import {SearchPanel} from "./search-panel";
import {noop} from "../../utils/utils";

it(
    `Should render SearchPanel locked`,
    () => {
      const renderer = new ShallowRenderer();

      const tree = renderer
      .render(
          <SearchPanel
            isLoading={true}
            onSearchClick={noop}
          />
      );

      expect(tree).toMatchSnapshot();
    }
);

it(
    `Should render SearchPanel unlocked`,
    () => {
      const renderer = new ShallowRenderer();

      const tree = renderer
      .render(
          <SearchPanel
            isLoading={false}
            onSearchClick={noop}
          />
      );

      expect(tree).toMatchSnapshot();
    }
);
