import React, { Fragment } from "react";

const Pet = ({ name, animal, breed }) => (
  <Fragment>
    <h1>{name}</h1>
    <h2>{animal}</h2>
    <h2>{breed}</h2>
  </Fragment>
);

export default Pet;
