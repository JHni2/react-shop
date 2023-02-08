import React from 'react';

import styles from './MainPage.module.css';

import BannerCarousel from '../components/BannerCarousel';
import Header from '../components/Header';
import Products from '../components/Products';
import Footer from '../components/Footer';

export default function MainPage(): React.ReactElement {
  return (
    <div className={styles.wrapper}>
      <Header />
      <BannerCarousel />
      <Products />
      <Footer />
    </div>
  );
}
