import React, { Component } from "react";

const resolveImageUrl = media => {
  if (media && media.photos && media.photos.photo) {
    const photos = media.photos.photo.filter(p => p["@size"] === "pn");
    return photos[0].value;
  }
};

class Pet extends Component {
  render() {
    const { name, animal, breed, location, media } = this.props;
    const url = resolveImageUrl(media) || "";

    return (
      <div className="pet">
        <div className="imageContainer">
          <img src={url} alt={name} />
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
