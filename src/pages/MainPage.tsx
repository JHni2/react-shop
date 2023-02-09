import React from 'react';

import BannerCarousel from '../components/BannerCarousel';
import Header from '../components/Header';
import Products from '../components/Products';
import Footer from '../components/Footer';

export default function MainPage(): React.ReactElement {
  return (
    <div className="wrapper">
      <Header />
      <BannerCarousel />
      <Products />
      <Footer />
    </div>
  );
}
