import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ProductPages from '../components/ProductPages';

export default function ProductPage(): React.ReactElement {
  return (
    <div className="wrapper">
      <Header />
      <ProductPages />
      <Footer />
    </div>
  );
}
