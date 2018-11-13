import React, { Component } from "react";
import { ANIMALS } from "petfinder-client";
import { Consumer } from "./search-context.js";

class SearchBox extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.search();
  };

  render() {
    return (
      <Consumer>
        {context => (
          <div className="search-box">
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="location">
                Location:
                <input
                  id="location"
                  type="text"
                  onChange={context.handleLocationChange}
                  value={context.location}
                  placeholder="Location"
                />
              </label>
              <label htmlFor="animal">
                Animal:
                <select
                  id="animal"
                  onChange={context.handleAnimalChange}
                  onBlur={context.handleAnimalChange}
                  value={context.animal}
                >
                  <option value="">Any Kind</option>
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
                  onChange={context.handleBreedChange}
                  onBlur={context.handleBreedChange}
                  value={context.breed}
                  disabled={context.breeds.length === 0}
                >
                  <option value="">Any Breed</option>
                  {context.breeds.map(breed => (
                    <option key={breed} value={breed}>
                      {breed}
                    </option>
                  ))}
                </select>
              </label>
              <input type="submit" value="Submit" />
            </form>
          </div>
        )}
      </Consumer>
    );
  }
}

export default SearchBox;
