import React, { Component } from "react";
import { ANIMALS } from "petfinder-client";

class SearchParams extends Component {
  state = {
    location: "San Francisco, CA",
    animal: "",
    breed: ""
  };

  handleLocationChange = e => {
    const location = e.target.value;
    this.setState({ location });
  };

  handleAnimalChange = e => {
    const animal = e.target.value;
    this.setState({ animal });
  };

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
      </div>
    );
  }
}

export default SearchParams;
