import React from 'react';
import { ItemsData } from '../stores/items';
import styles from './Product.module.css';

interface Props {
  type: string;
}

export default function Product(props: Props): React.ReactElement {
  const category = props.type;

  return (
    <div className={styles.itemsContainer}>
      <h2 className="title-bold-30 mb-5">{category}</h2>
      <a className={styles.itemWrapper}>
        {ItemsData.map((item, index) => {
          if (item.category === props.type) {
            if (index > 11) {
              return;
            }
            return (
              <div key={item.id} className={styles.itemBox}>
                <figure>
                  <img className={styles.itemImg} src={item.image} />
                </figure>
                <div className={styles.des}>
                  <p className="text-bold-16">{item.title}</p>
                  <p className="text-medium-16">${item.price}</p>
                </div>
              </div>
            );
          }
        })}
      </a>
    </div>
  );
}
