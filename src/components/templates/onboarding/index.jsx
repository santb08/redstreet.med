import ImageCarousel from '../../organisms/image-carousel';
import Divider from '../../atoms/divider';
import Button from '../../molecules/button';
import styles from './styles.module.scss';
import NoScroll from './noscroll';

const CALENDLY_URL = 'https://calendly.com/redstreetmed/30min';

const OnBoardingTemplate = ({ images }) => (
  <>
    <NoScroll />
    <div className={`${styles.container} primary-bg`}>
      <ImageCarousel images={images} className={styles.imageCarousel}/>
      <Divider />
      <div className={styles.content}>
        <h1 className={styles.title}>
          redstreet.med
        </h1>
        <div className={styles.buttonsGroup}>
          <Button href={CALENDLY_URL} newTab>
            BOOK A SESSION
          </Button>
          <Button variant="secondary" href="/home">
            EXPLORE
          </Button>
        </div>
      </div>
    </div>
  </>
);

OnBoardingTemplate.defaultProps = {
  images: [],
};

export default OnBoardingTemplate;
