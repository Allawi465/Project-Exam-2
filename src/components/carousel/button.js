import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';

/**
 * A component that renders left and right scroll buttons for a carousel
 * @function
 * @param {Object} props The component props
 * @param {Array} props.media An array of media to display in the carousel
 * @param {number} props.currentImage The index of the currently selected image in the carousel
 * @param {function} props.handleScrollLeft A callback function to handle scrolling left in the carousel
 * @param {function} props.handleScrollRight A callback function to handle scrolling right in the carousel
 * @returns {React.ReactElement} return ButtonsCarousel component
 * @example
 * <ButtonsCarousel
 * currentImage={currentImage}
 * media={media}
 * handleScrollLeft={handleScrollLeft}
 * handleScrollRight={handleScrollRight}
 *  />
 */

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
