import React from 'react';
import { IMAGES_DATA } from '../content/images';

class Homepage extends React.Component {
  state = {
    open: false,
    galleryFilter: false,
    imagesArray: IMAGES_DATA,
  };

  toggleGalleryFilter = galleryFilter => {
    this.setState({ galleryFilter });
  };

  render() {
    const { imagesArray, galleryFilter } = this.state;
    const filteredArray = !galleryFilter
      ? imagesArray
      : imagesArray.filter(img => {
          if (img.tags.findIndex(tag => tag === galleryFilter) > -1) {
            return img;
          }
        });

    const images = filteredArray.map((img, index) => {
      return (
        <div
          key={`image-${index}`}
          className={`image-wrapper ${img.imageClass}`}
        >
          <img src={img.url} />
        </div>
      );
    });

    return (
      <div className="homepage-wrapper">
        <h1>A component!</h1>
        <button onClick={() => this.toggleGalleryFilter('wedding')}>
          Weddings
        </button>
        <button onClick={() => this.toggleGalleryFilter('event')}>
          Special Events
        </button>
        <button onClick={() => this.toggleGalleryFilter(false)}>
          All Images
        </button>
        <div className="image-gallery">{images}</div>
      </div>
    );
  }
}

export default Homepage;
