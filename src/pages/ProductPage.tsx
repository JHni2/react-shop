import styles from './ProductPage.module.css';

import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Product from '../components/Product';

export default function ProductPage(): React.ReactElement {
  return (
    <div className="wrapper">
      <Header />
      <section className={styles.pageContainer}>
        <Product type="" />
      </section>
      <Footer />
    </div>
  );
}
