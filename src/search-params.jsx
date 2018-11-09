import React, { Component } from "react";

class SearchParams extends Component {
  state = {
    location: "San Francisco, CA",
    animal: "",
    breed: ""
  };
  render() {
    return (
      <div className="searchParams">
        <label htmlFor="location">
          Location
          <input
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
