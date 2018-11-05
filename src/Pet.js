import React from "react";

const Pet = props => {
  const { name, animal, breed } = props;
  return React.createElement("div", {}, [
    React.createElement("h2", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

export default Pet;
