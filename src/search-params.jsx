import React, { Component } from "react";
import petsAPI, { ANIMALS } from "petfinder-client";

const petFinder = petsAPI({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

class SearchParams extends Component {
  state = {
    location: "San Francisco, CA",
    animal: "",
    breed: "",
    breeds: []
  };

  handleLocationChange = e => {
    const location = e.target.value;
    this.setState({ location });
  };

  handleAnimalChange = e => {
    const animal = e.target.value;
    this.setState({ animal, breed: "" }, this.getBreeds);
  };

  handleBreedChange = e => {
    const breed = e.target.value;
    this.setState({ breed });
  };

  getBreeds() {
    if (this.state.animal) {
      petFinder.breed.list({ animal: this.state.animal }).then(data => {
        if (
          data.petfinder &&
          data.petfinder.breeds &&
          Array.isArray(data.petfinder.breeds.breed)
        ) {
          const breeds = data.petfinder.breeds.breed;
          this.setState({ breeds });
        } else {
          this.setState({ breeds: [] });
        }
      });
    } else {
      this.setState({ breeds: [] });
    }
  }

  render() {
    return (
      <div className="search-params">
        <label htmlFor="location">
          Location:
          <input
            id="location"
            onChange={this.handleLocationChange}
            value={this.state.location}
            placeholder="Location"
          />
        </label>
        <label htmlFor="animal">
          Animal:
          <select
            id="animal"
            onChange={this.handleAnimalChange}
            onBlur={this.handleAnimalChange}
            value={this.state.animal}
          >
            <option />
            {ANIMALS.map(animal => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="breed">
          Breed:
          <select
            id="breed"
            onChange={this.handleBreedChange}
            onBlur={this.handleBreedChange}
            value={this.state.breed}
            disabled={this.state.breeds.length === 0}
          >
            <option />
            {this.state.breeds.map(breed => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </div>
    );
  }
}

export default SearchParams;
