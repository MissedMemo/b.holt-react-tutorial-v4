import React, { Component, Fragment } from "react";

class Pet extends Component {
  render() {
    const { name, animal, breed } = this.props;
    return (
      <Fragment>
        <h1>{name}</h1>
        <h2>{animal}</h2>
        <h2>{breed}</h2>
      </Fragment>
    );
  }
}

export default Pet;
