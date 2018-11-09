import React, { Component, Fragment } from "react";
import Pet from "./pet.jsx";
import petsAPI from "petfinder-client";

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
      <div className="search">
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

export default Results;
