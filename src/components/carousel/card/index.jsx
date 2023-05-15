import Carousel from 'react-bootstrap/Carousel';
import { useCarousel } from '../../../hooks/index';
import defaultImages from '../../../images/default.jpg';
import { ButtonsCarousel } from '../button';

/**
 *  A carousel component that displays images and allows scrolling through them for venue by id
 * @component
 * @param {Array} media An array of image URLs for the carousel
 * @param {string} name The name of the venue
 * @property {Object} useCarousel A custom hook that provides the carousel functionality
 * @property {number} currentImage The index of the current image being displayed
 * @property {number} imagesLength The total number of images in the carousel
 * @property {function} handleScrollRight A function to handle scrolling to the right
 * @property {function} handleScrollLeft A function to handle scrolling to the left
 * @property {function} handleSelect A function to handle selecting an image from the carousel
 * @property {function} ButtonsCarousel A component that renders buttons to scroll through the images
 * @returns {React.ReactElement} return VenueCarousel component
 * @example
 * <VenuesCarousel media={props.media} name={props.name} />
 */

function VenueCarousel({ media, name }) {
  /**
   * Custom hook that provides the carousel functionality
   */
  const {
    currentImage,
    imagesLength,
    handleScrollRight,
    handleScrollLeft,
    handleSelect,
  } = useCarousel(media);

  return (
    <div className="venue-img">
      <div className="venue-img-container">
        {media.length ? (
          <Carousel
            activeIndex={currentImage}
            onSelect={handleSelect}
            interval={null}
            controls={false}
            indicators={imagesLength > 1}
          >
            {media.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  src={image}
                  alt={`${name} ${index} of ${imagesLength}`}
                  onError={(e) => {
                    e.target.src = defaultImages;
                  }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <img src={defaultImages} alt={`${name} default`} />
        )}
        <ButtonsCarousel
          currentImage={currentImage}
          media={media}
          handleScrollLeft={handleScrollLeft}
          handleScrollRight={handleScrollRight}
        />
      </div>
      <div className="venue-img-thumbnails">
        {media.length > 1 && (
          <div className="venue-img-thumbnails">
            {media.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${name} ${index}`}
                className={currentImage === index ? 'active' : ''}
                onClick={() => handleSelect(index)}
                onError={(e) => {
                  e.target.src = defaultImages;
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default VenueCarousel;
