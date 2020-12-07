import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import {Table} from "./table";
import {noop} from "../../utils/utils";

const mockUser = {
  id: 339,
  firstName: `Susen`,
  lastName: `Graham`,
  email: `LNicholson@mi.org`,
  phone: `(220)920-9427`,
  address: {
    streetAddress: `7422 Vitae Rd`,
    city: `Bergen County`,
    state: `NE`,
    zip: `24099`
  },
  description: `aenean augue neque mattis sollicitudin turpis sed aenean elit fringilla nec massa libero nullam lectus aenean et vel sed pulvinar et augue facilisis vitae libero dolor massa adipiscing dolor vitae orci tortor`
};

it(
    `Should render Table`,
    () => {
      const renderer = new ShallowRenderer();

      const tree = renderer
      .render(
          <Table
            isLoading={false}
            loadData={noop}
            currentPageUsers={[mockUser, mockUser, mockUser]}
          />
      );

      expect(tree).toMatchSnapshot();
    }
);

it(
    `Should render loading Table`,
    () => {
      const renderer = new ShallowRenderer();

      const tree = renderer
      .render(
          <Table
            isLoading={true}
            loadData={noop}
            currentPageUsers={[]}
          />
      );

      expect(tree).toMatchSnapshot();
    }
);
