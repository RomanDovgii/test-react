import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {AppRoute} from "../../utils/const";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path={AppRoute.SELECT}
          render={({history}) => {
          }}
        />

        <Route
          exact
          path={AppRoute.TABLE}
          render={({history}) => {
          }}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
