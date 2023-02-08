import React from 'react';

<<<<<<< HEAD
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
=======
export default function MainPage(): React.ReactElement {
  return <div>메인 페이지</div>;
>>>>>>> 1d72b9250245086797f8782736181e4df7e4bfb1
}
