import { useState } from 'react';

/**
 * @typedef {Object} useCarousel return
 * @property {Function} handleSelect A function to handle selecting an image in the carousel
 * @property {Function} handleScrollLeft A function to handle scrolling left in the carousel
 * @property {Function} handleScrollRight A function to handle scrolling right in the carousel
 */

/**
 *  A custom hook for handling carousel functionality
 *  @param {array} media An array of media to be used in the carousel
 *  @returns {useCarousel}
 *  @example
 * const {
 * currentImage,
 * imagesLength,
 * handleScrollRight,
 * handleScrollLeft,
 * handleSelect,
 * } = useCarousel(media);
 */

function useCarousel(media) {
  const [currentImage, setCurrentImage] = useState(0);

  const handleSelect = (imageIndex) => {
    setCurrentImage(imageIndex);
  };

  const handleScrollLeft = () => {
    if (currentImage > 0) {
      setCurrentImage(currentImage - 1);
    }
  };

  const handleScrollRight = () => {
    if (currentImage < media.length - 1) {
      setCurrentImage(currentImage + 1);
    }
  };

  const imagesLength = media.length;

  return {
    currentImage,
    imagesLength,
    handleScrollRight,
    handleScrollLeft,
    handleSelect,
  };
}

export default useCarousel;
