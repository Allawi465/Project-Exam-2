import { Carousel, Card } from 'react-bootstrap';
import { ButtonsCarousel } from '../button';
import { useCarousel } from '../../../hooks/index';
import defaultImages from '../../../images/default.jpg';

function VenuesCarousel({ media, name }) {
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
