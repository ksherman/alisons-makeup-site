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
        <div className="filter-buttons">
          <button
            className={`category-button ${
              galleryFilter === 'Weddings' ? 'active' : null
            }`}
            onClick={() => this.toggleGalleryFilter('Weddings')}
          >
            Weddings
          </button>
          <button
            className={`category-button ${
              galleryFilter === 'Events' ? 'active' : null
            }`}
            onClick={() => this.toggleGalleryFilter('Events')}
          >
            Special Events
          </button>
          <button
            className={`category-button ${!galleryFilter ? 'active' : null}`}
            onClick={() => this.toggleGalleryFilter(false)}
          >
            All Images
          </button>
        </div>
        <div className="image-gallery">{images}</div>
      </div>
    );
  }
}

export default Homepage;
