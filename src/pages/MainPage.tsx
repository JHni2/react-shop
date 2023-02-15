import styles from './MainPage.module.css';

import React from 'react';

import BannerCarousel from '../components/BannerCarousel';
import Product from '../components/Product';

export default function MainPage(): React.ReactElement {
  return (
    <div className="wrapper">
      <BannerCarousel />
      <section className={styles.productsContainer}>
        <Product type="패션" />
        <Product type="악세서리" />
        <Product type="디지털" />
      </section>
    </div>
  );
}
