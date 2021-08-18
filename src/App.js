import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route>
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
