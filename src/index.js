import React, { Fragment } from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import petsAPI from "petfinder-client";
import { Provider } from "./search-context.js";
import Results from "./results.jsx";
import Details from "./details.jsx";
import SearchParams from "./search-params.jsx";

const petFinder = petsAPI({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "San Francisco, CA",
      animal: "",
      breed: "",
      breeds: [],
      handleLocationChange: this.handleLocationChange,
      handleAnimalChange: this.handleAnimalChange,
      handleBreedChange: this.handleBreedChange,
      getBreeds: this.getBreeds
    };
  }

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
      <Fragment>
        <header>
          <Link to="/">Adoptible Pets...</Link>
          <Link to="/search-params">
            <span aria-label="search" role="img">
              🔍
            </span>
          </Link>
        </header>
        <Provider value={this.state}>
          <Router>
            <Results path="/" />
            <Details path="/details/:id" />
            <SearchParams path="/search-params" />
          </Router>
        </Provider>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("root"));
