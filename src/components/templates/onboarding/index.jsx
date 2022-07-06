import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import ImageCarousel from '../../organisms/image-carousel';
import Divider from '../../atoms/divider';
import Button from '../../molecules/button';
import styles from './styles.module.scss';

const OnBoardingTemplate = ({ images }) => (
  <div className={`${styles.container} primary-bg`}>
    <ImageCarousel images={images} className={styles.imageCarousel}/>
    <Divider />
    <div className={styles.content}>
      <h1>redstreet.med</h1>
      <div className={styles.buttonsGroup}>
        <Button>BOOK A SESSION</Button>
        <Button variant="secondary">EXPLORE</Button>
      </div>
    </div>
  </div>
);

OnBoardingTemplate.defaultProps = {
  images: [],
};

export default OnBoardingTemplate;
