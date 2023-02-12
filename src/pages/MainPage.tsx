import styles from './MainPage.module.css';

import React from 'react';

import BannerCarousel from '../components/BannerCarousel';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Product from '../components/Product';

export default function MainPage(): React.ReactElement {
  return (
    <div className="wrapper">
      <Header />
      <BannerCarousel />
      <section className={styles.productsContainer}>
        <Product type="패션" />
        <Product type="악세서리" />
        <Product type="디지털" />
      </section>
      <Footer />
    </div>
  );
}
