import React, { Component } from "react";

const resolvePhotos = media => {
  if (media && media.photos && media.photos.photo) {
    return media.photos.photo.filter(p => p["@size"] === "pn");
  }
};

class Carousel extends Component {
  state = {
    photos: [],
    active: 0
  };

  static getDerivedStateFromProps({ media }) {
    const photos = resolvePhotos(media) || [];
    return { photos };
  }

  render() {
    const { photos, active } = this.state;

    return (
      <div className="carousel">
        <img src={photos[active].value} alt="primary animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => {
            const classname = index === active ? "active" : "";
            return (
              <img
                key={photo.value}
                src={photo.value}
                className={classname}
                alt="animal thumbnail"
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Carousel;
