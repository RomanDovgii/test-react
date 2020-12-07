import React from "react";
import renderer from "react-test-renderer";
import {UserInfo} from "./user-info";

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
    `Should render UserInfo`,
    () => {
      const tree = renderer
      .create(
          <UserInfo
            selectedUser={mockUser}
          />
      )
      .toJSON();

      expect(tree).toMatchSnapshot();
    }

);

it(
    `Shouldn't render UserInfo`,
    () => {
      const tree = renderer
      .create(
          <UserInfo
            selectedUser={{}}
          />
      )
      .toJSON();

      expect(tree).toMatchSnapshot();
    }
);
