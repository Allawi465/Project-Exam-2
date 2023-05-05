import Carousel from 'react-bootstrap/Carousel';
import { useCarousel } from '../../../hooks/index';
import defaultImages from '../../../images/default.jpg';
import { ButtonsCarousel } from '../button';

function VenueCarousel({ media, name }) {
  const {
    currentImage,
    imagesLength,
    handleScrollRight,
    handleScrollLeft,
    handleSelect,
  } = useCarousel(media);

  return (
    <div className="venue-img">
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
  );
}

export default VenueCarousel;
