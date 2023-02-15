import styles from './ProductPage.module.css';

import React from 'react';
import Product from '../components/Product';

export default function ProductPage(): React.ReactElement {
  return (
    <div className="wrapper">
      <section className={styles.pageContainer}>
        <Product type="" />
      </section>
    </div>
  );
}
