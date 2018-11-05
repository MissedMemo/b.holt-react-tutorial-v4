import React, { Fragment } from "react";
import { render } from "react-dom";
import Pet from "./Pet.jsx";
import petsAPI from "petfinder-client";

const petFinder = petsAPI({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

const resolvePets = pets =>
  pets & pets.pet || Array.isArray(pets.pet) ? pets.pet : [pets.pet];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: []
    };
  }

  componentDidMount() {
    petFinder.pet
      .find({ output: "full", location: "Seattle, WA" })
      .then(data => {
        const pets = resolvePets(data.petfinder.pets);
        if (pets) {
          this.setState({ pets });
        }
      });
  }

  render() {
    return (
      <Fragment>
        <h1>Adoptible Pets...</h1>
        <pre>
          <code>{JSON.stringify(this.state, null, 4)}</code>
        </pre>
        {/*}
        <Pet name="Fido" animal="dog" breed="mutt" />
        <Pet name="Saunders" animal="cat" breed="siamese" />
        <Pet name="Fritz" animal="fish" breed="goldfish" />
        */}
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("root"));
