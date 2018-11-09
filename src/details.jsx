import React, { Component } from "react";
import petsAPI from "petfinder-client";
import { navigate } from "@reach/router";

const petFinder = petsAPI({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

const resolveBreed = breed => (Array.isArray(breed) ? breed.join(", ") : breed);

class Details extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    petFinder.pet
      .get({ output: "full", id: this.props.id })
      .then(data => {
        const pet = data.petfinder.pet;
        const breed = resolveBreed(pet.breeds.breed);
        this.setState({
          name: pet.name,
          animal: pet.animal,
          location: `${pet.contact.city}, ${pet.contact.state}`,
          description: pet.description,
          media: pet.media,
          breed,
          loading: false
        });
      })
      .catch(err => {
        navigate("/");
      });
  }

  render() {
    const { loading, name, animal, breed, location, description } = this.state;
    return loading ? (
      <h1>Loading...</h1>
    ) : (
      <div className="details">
        <h1>{name}</h1>
        <h2>
          {animal} - {breed} - {location}
        </h2>
        <p>{description}</p>
      </div>
    );
  }
}

export default Details;
