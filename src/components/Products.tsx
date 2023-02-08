import styles from './Products.module.css';

import React from 'react';
import Product from './Product';

export default function Products(): React.ReactElement {
  return (
    <section className={styles.productsContainer}>
      <Product type="패션" />
      <Product type="악세서리" />
      <Product type="디지털" />
    </section>
  );
}
