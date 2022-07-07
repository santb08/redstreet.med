import styles from './styles.module.scss';

const Gallery = ({
  images,
  columns,
}) => {
  const mockImages = [
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
  ];

  const columnsArray = Array.from({
    length: columns,
  }, () => []);

  mockImages.forEach((image, index) => {
    columnsArray[index % columns].push(image);
  });

  return (
    <div className={styles.galleryContainer}>
      {columnsArray.map((column, index) => (
        <li key={index} className={styles.galleryColumn}>
          {column.map((image, index) => (
            <div key={index} className={styles.galleryImage}>
              <img src={image.url} key={`image-${index}`}/>
            </div>
          ))}
        </li>
      ))}
    </div>
  );
}

Gallery.defaultProps = {
  images: [],
  columns: 4,
};

export default Gallery;
