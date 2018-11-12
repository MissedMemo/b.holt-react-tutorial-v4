import React, { createContext } from "react";

const SearchContext = createContext({
  location: "San Francisco, CA",
  animal: "",
  breed: "",
  breeds: [],
  handleLocationChange: {},
  handleAnimalChange: {},
  handleBreedChange: {},
  getBreeds: {}
});

export const Provider = SearchContext.Provider;
export const Consumer = SearchContext.Consumer;
