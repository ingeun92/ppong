import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from '../pages/Home';
import Playing from '../pages/Playing';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            {/* Playing */}
            <Route path="/playing">
              <Playing />
            </Route>
            {/* Home */}
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}
