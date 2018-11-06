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
      .find({ output: "full", location: "San Francisco, CA" })
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
        <div>
          {this.state.pets.map(pet => (
            <Pet
              key={pet.id}
              name={pet.name}
              animal={pet.animal}
              breed={pet.breeds.breed}
            />
          ))}
        </div>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("root"));
