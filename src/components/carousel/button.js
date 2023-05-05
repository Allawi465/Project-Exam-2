import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';

export function ButtonsCarousel({
  media,
  currentImage,
  handleScrollLeft,
  handleScrollRight,
}) {
  return (
    <div>
      {currentImage > 0 && (
        <div className="venues-img-scroll left" onClick={handleScrollLeft}>
          <BsChevronLeft />
        </div>
      )}
      {currentImage < media.length - 1 && (
        <div className="venues-img-scroll right" onClick={handleScrollRight}>
          <BsChevronRight />
        </div>
      )}
    </div>
  );
}
