import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Vote from "./Vote";

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/*" component={Vote} />
        </Switch>
      </Router>
    </>
  );
}
