import React, { Fragment } from "react";
import { render } from "react-dom";
import Results from "./results.jsx";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <h1>Adoptible Pets...</h1>
        <Results />
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("root"));
