import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
// import {AppRoute} from "../../utils/const";
import TablePage from "../table-page/table-page";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route
          exact
          path={AppRoute.SELECT}
          render={() => {
          }}
        /> */}

        <Route
          exact
          render={() => (
            <TablePage/>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
