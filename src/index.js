import React, { Fragment } from "react";
import { render } from "react-dom";
import Pet from "./Pet.jsx";

class App extends React.Component {
  handleTitleClick() {
    alert("you clicked it!");
  }

  render() {
    return (
      <Fragment>
        <h1 onClick={this.handleTitleClick}>Adoptible Pets...</h1>
        <Pet name="Fido" animal="dog" breed="mutt" />
        <Pet name="Saunders" animal="cat" breed="siamese" />
        <Pet name="Fritz" animal="fish" breed="goldfish" />
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("root"));
