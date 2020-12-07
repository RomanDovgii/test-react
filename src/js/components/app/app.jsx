import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {AppRoute} from "../../utils/const";
import TablePage from "../table-page/table-page";
import SelectionPage from "../selection-page/selection-page";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <SelectionPage/>
          )}
        />

        <Route
          exact
          path={AppRoute.TABLE}
          render={() => (
            <TablePage/>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
