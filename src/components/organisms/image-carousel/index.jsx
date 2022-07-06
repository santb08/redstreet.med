import { useState, useEffect } from 'react';
import styles from './styles.module.scss';

const ImageCarousel = ({
  className,
  images,
}) => {
  const [backgroundImage, setBackgroundImage] = useState(null);

  useEffect(() => {
    if (images.length) {
      setBackgroundImage(0);
    }
  }, [images]);

  useEffect(() => {
    const changeImage = setTimeout(() => {
      setBackgroundImage((backgroundImage + 1) % images.length);
    }, 5000);

    return () => {
      clearTimeout(changeImage);
    }
  }, [images, backgroundImage]);

  const currentImage = images[backgroundImage];

  if (!currentImage) {
    return null;
  }

  return (
    <div className={`${className} ${styles.container}`}>
      <img src={currentImage.url} alt={currentImage.alt} />
    </div>
  )
};

export default ImageCarousel;
