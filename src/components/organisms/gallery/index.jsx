import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.scss';

const Gallery = ({
  images,
  columns,
}) => {
  const columnsArray = Array.from({
    length: columns,
  }, () => []);

  images.forEach((image, index) => {
    columnsArray[index % columns].push(image);
  });

  return (
    <div className={styles.galleryContainer}>
      {columnsArray.map((column, index) => (
        <li key={index} className={styles.galleryColumn}>
          {column.map((image, index) => (
            <Link href={`/collections/${image.id}`} key={image.id}>
              <div key={index} className={styles.galleryImage}>
                <img alt={image.alt} src={image.url} />
              </div>
            </Link>
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
