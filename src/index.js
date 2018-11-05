import React, { Fragment } from "react";
import { render } from "react-dom";
import Pet from "./Pet.jsx";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <h1>Adoptible Pets...</h1>
        <Pet name="Fido" animal="dog" breed="mutt" />
        <Pet name="Saunders" animal="cat" breed="siamese" />
        <Pet name="Fritz" animal="fish" breed="goldfish" />
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("root"));
