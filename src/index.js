import React, { Fragment } from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import Results from "./results.jsx";
import Details from "./details.jsx";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <header>
          <Link to="/">Adoptible Pets...</Link>
        </header>
        <Router>
          <Results path="/" />
          <Details path="/details/:id" />
        </Router>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("root"));
