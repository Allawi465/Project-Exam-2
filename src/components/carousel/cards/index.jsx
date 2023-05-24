import { Carousel, Card } from 'react-bootstrap';
import { ButtonsCarousel } from '../button';
import { useCarousel } from '../../../hooks/index';
import defaultImages from '../../../images/default.jpg';

/**
 *  A carousel component that displays images and allows scrolling through them for venues
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
 * @returns {React.ReactElement} return VenuesCarousel component
 * @example
 * <VenuesCarousel media={props.media} name={props.name} />
 */

function VenuesCarousel({ media, name }) {
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
    <div className="venuesImages">
      {media.length ? (
        <Carousel
          className="venuesImages-carousel"
          activeIndex={currentImage}
          onSelect={handleSelect}
          interval={null}
          controls={false}
          indicators={imagesLength > 1}
        >
          {media.map((image, index) => (
            <Carousel.Item key={index}>
              <Card.Img
                variant="top"
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
        <Card.Img
          src={defaultImages}
          alt={`${name} default image`}
          className="card-img-top"
        />
      )}
      <ButtonsCarousel
        currentImage={currentImage}
        media={media}
        handleScrollLeft={handleScrollLeft}
        handleScrollRight={handleScrollRight}
      />
    </div>
  );
}

export default VenuesCarousel;
