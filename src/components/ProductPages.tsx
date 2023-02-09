import styles from './ProductPages.module.css';
import React from 'react';
import Product from './Product';

export default function ProductPages(): React.ReactElement {
  return (
    <section className={styles.pageContainer}>
      <Product type="" />
    </section>
  );
}
