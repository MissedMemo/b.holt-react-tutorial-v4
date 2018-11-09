import React, { Component } from "react";

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

  render() {
    return (
      <div className="search-params">
        <label htmlFor="location">
          Location:
          <input
            onChange={this.handleLocationChange}
            id="location"
            value={this.state.location}
            placeholder="Location"
          />
        </label>
      </div>
    );
  }
}

export default SearchParams;
