import React, { Component } from "react";
import { Link } from "@reach/router";

const resolveImageUrl = media => {
  if (media && media.photos && media.photos.photo) {
    const photos = media.photos.photo.filter(p => p["@size"] === "pn");
    return photos[0].value || "http://placecorgi.com/300/300";
  }
};

class Pet extends Component {
  render() {
    const { name, animal, breed, location, media, id } = this.props;
    const url = resolveImageUrl(media) || "";

    return (
      <Link to={`details/${id}`} className="pet">
        <div className="imageContainer">
          <img src={url} alt={name} />
        </div>
        <div className="info">
          <h1>{name}</h1>
          <h2>
            {animal} - {breed} - {location}
          </h2>
        </div>
      </Link>
    );
  }
}

export default Pet;
