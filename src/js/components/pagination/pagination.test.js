import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import {Pagination} from "./pagination";
import {noop} from "../../utils/utils";

it(
    `Shouldn't render Pagination`,
    () => {
      const renderer = new ShallowRenderer();

      const tree = renderer
      .render(
          <Pagination
            pages={1}
            currentPage={1}
            onPageClick={noop}
            onFirstClick={noop}
            onPreviousClick={noop}
            onNextClick={noop}
            onLastClick={noop}
          />
      );

      expect(tree).toMatchSnapshot();
    }
);

it(
    `Should render correct Pagination with 5 pages`,
    () => {
      const renderer = new ShallowRenderer();

      const tree = renderer
      .render(
          <Pagination
            pages={5}
            currentPage={1}
            onPageClick={noop}
            onFirstClick={noop}
            onPreviousClick={noop}
            onNextClick={noop}
            onLastClick={noop}
          />
      );

      expect(tree).toMatchSnapshot();
    }
);

it(
    `Should render correct Pagination with 10 pages`,
    () => {
      const renderer = new ShallowRenderer();

      const tree = renderer
      .render(
          <Pagination
            pages={10}
            currentPage={1}
            onPageClick={noop}
            onFirstClick={noop}
            onPreviousClick={noop}
            onNextClick={noop}
            onLastClick={noop}
          />
      );

      expect(tree).toMatchSnapshot();
    }
);

it(
    `Should render correct Pagination with 10 pages, user should be on fifth page`,
    () => {
      const renderer = new ShallowRenderer();

      const tree = renderer
      .render(
          <Pagination
            pages={10}
            currentPage={5}
            onPageClick={noop}
            onFirstClick={noop}
            onPreviousClick={noop}
            onNextClick={noop}
            onLastClick={noop}
          />
      );

      expect(tree).toMatchSnapshot();
    }
);
