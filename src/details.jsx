import React, { Component } from "react";
import petsAPI from "petfinder-client";
import { navigate } from "@reach/router";
import Carousel from "./carousel.jsx";
import Modal from "./modal.jsx";

const petFinder = petsAPI({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

const resolveBreed = breed => (Array.isArray(breed) ? breed.join(", ") : breed);

class Details extends Component {
  state = {
    loading: true,
    showModal: true
  };

  toggleModal = () => {
    this.setState(s => ({ showModal: !s.showModal }));
  };

  componentDidMount() {
    petFinder.pet
      .get({ output: "full", id: this.props.id })
      .then(data => {
        const pet = data.petfinder.pet;
        const breed = resolveBreed(pet.breeds.breed);
        this.setState({
          name: pet.name,
          animal: pet.animal,
          location: `${pet.contact.city}, ${pet.contact.state}`,
          description: pet.description,
          media: pet.media,
          breed,
          loading: false
        });
      })
      .catch(err => {
        navigate("/");
      });
  }

  render() {
    const {
      loading,
      name,
      animal,
      breed,
      location,
      description,
      media,
      showModal
    } = this.state;
    return loading ? (
      <h1>Loading...</h1>
    ) : (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>
            {animal} - {breed} - {location}
          </h2>
          <button onClick={this.toggleModal}>Adopt {name}?</button>
          <p>{description}</p>
          {showModal ? (
            <Modal>
              <h1>Would you like to adopt {name}?</h1>
              <button onClick={this.toggleModal}>Yes!</button>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Details;
