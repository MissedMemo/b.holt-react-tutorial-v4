import React, { Fragment } from "react";
import { render } from "react-dom";
import Pet from "./Pet.jsx";
import petsAPI from "petfinder-client";

const petFinder = petsAPI({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

class App extends React.Component {
  componentDidMount() {
    petFinder.breed.list({ animal: "dog" }).then(console.log, console.error);
  }

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
