import styles from './ProductPage.module.css';

import React from 'react';
import { useRecoilValue } from 'recoil';
import { themeDarkState } from '../../stores/recoil/theme';
import Product from '../../components/Product/Product';

export default function ProductPage(): React.ReactElement {
  const themeDark = useRecoilValue(themeDarkState);

  return (
    <div className={themeDark ? 'wrapper' : 'wrapperLightTheme'}>
      <section className={styles.pageContainer}>
        <Product />
      </section>
    </div>
  );
}
