import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from "./components/Home/Home";
import NoMatch from "./components/NoMatch/NoMatch";
import TeamDetail from "./components/TeamDetail/TeamDetail";


function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route path="/home">
            <Home/>
        </Route>
        <Route path="/team/:id">
            <TeamDetail/>
        </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
    </Router>

    </div>
  );
}

export default App;
