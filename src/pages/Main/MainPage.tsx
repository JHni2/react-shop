import styles from './MainPage.module.css';

import React from 'react';

import { useRecoilValue } from 'recoil';
import { themeDarkState } from '../../stores/recoil/theme';
import BannerCarousel from '../../components/Banner/BannerCarousel';
import Product from '../../components/Product/Product';

export default function MainPage(): React.ReactElement {
  const themeDark = useRecoilValue(themeDarkState);

  return (
    <div className={themeDark ? 'wrapper' : 'wrapperLightTheme'}>
      <BannerCarousel />
      <section className={styles.productsContainer}>
        <Product type="패션" />
        <Product type="악세서리" />
        <Product type="디지털" />
      </section>
    </div>
  );
}
