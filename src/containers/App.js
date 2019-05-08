// @flow
import React, { Component } from "react";
import AddStudent from "./AddStudent";
import AddEscuela from "./AddShool";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <h1>La week</h1>
        <h5>Inscripci&oacute;n a concurso de danza</h5>
        <Router>
          <Switch>
            <Route exact path="/add_student" component={AddStudent} />
            <Route path="/" component={AddEscuela} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
