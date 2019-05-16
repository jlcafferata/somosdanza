// @flow
import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import AddStudent from "./AddStudent";
import AddEscuela from "./AddShool";
import ListInscriptions from "./ListInscriptions";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col>
            <img src="assets/somos_danza.png" />
          </Col>
          <Col>
            <img src="assets/la_week.png" />
          </Col>
        </Row>
        <Row>
          <Router>
            <Switch>
              <Route exact path="/add_student" component={AddStudent} />
              <Route
                exact
                path="/tiojosesoslomas"
                component={ListInscriptions}
              />
              <Route path="/" component={AddEscuela} />
            </Switch>
          </Router>
        </Row>
      </Container>
    );
  }
}

export default App;
