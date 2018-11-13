import React, { Component, Fragment } from "react";
import SearchBox from "./search-box.jsx";
import { Consumer } from "./search-context.js";
import petsAPI from "petfinder-client";
import Pet from "./pet.jsx";

const petFinder = petsAPI({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

const resolvePets = pets =>
  pets & pets.pet || Array.isArray(pets.pet) ? pets.pet : [pets.pet];

const resolveBreed = breed => (Array.isArray(breed) ? breed.join(", ") : breed);

class Results extends Component {
  state = {
    pets: []
  };

  componentDidMount() {
    this.search();
  }

  search = () => {
    const { location, animal, breed } = this.props.searchParams;
    petFinder.pet
      .find({ output: "full", location, animal, breed })
      .then(data => {
        const pets = resolvePets(data.petfinder.pets);
        if (pets) {
          this.setState({ pets });
        }
      });
  };

  render() {
    return (
      <div className="search">
        <SearchBox search={this.search} />
        {this.state.pets.map(pet => (
          <Pet
            key={pet.id}
            name={pet.name}
            animal={pet.animal}
            breed={resolveBreed(pet.breeds.breed)}
            media={pet.media}
            location={`${pet.contact.city}, ${pet.contact.state}`}
            id={pet.id}
          />
        ))}
      </div>
    );
  }
}

const ResultsWithContext = props => (
  <Consumer>
    {context => <Results {...props} searchParams={context} />}
  </Consumer>
);

export default ResultsWithContext;
