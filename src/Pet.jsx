import React, { Component } from "react";

class Pet extends Component {
  render() {
    const { name, animal, breed, location } = this.props;
    return (
      <div className="pet">
        <div className="imageContainer">
          <img />
        </div>
        <div className="info">
          <h1>{name}</h1>
          <h2>
            {animal} - {breed} - {location}
          </h2>
        </div>
      </div>
    );
  }
}

export default Pet;
