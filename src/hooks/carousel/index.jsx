import { useState } from 'react';

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
    handleSelect
  }
}

export default useCarousel;