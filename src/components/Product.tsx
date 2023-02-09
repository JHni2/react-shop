import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ItemsData } from '../stores/items';
import styles from './Product.module.css';

interface Props {
  type: string;
}

export default function Product(props: Props): React.ReactElement {
  let category = props.type;
  const location = useLocation();
  const [currLocation, setCurrLocation] = useState('/');

  useEffect(() => {
    setCurrLocation(location.pathname.slice(1));
  }, [location]);

  if (currLocation === 'fashion') category = '패션';
  if (currLocation === 'accessory') category = '악세서리';
  if (currLocation === 'digital') category = '디지털';

  return (
    <>
      {currLocation ? (
        <div className={styles.breadcrumbs}>홈 &gt; {category}</div>
      ) : (
        <></>
      )}
      <div className={styles.itemsContainer}>
        <h2 className="title-bold-30 mt">{category}</h2>
        <div className={styles.itemWrapper}>
          {ItemsData.map((item, index) => {
            if (
              (item.category[0] === props.type && index < 12) ||
              item.category[1] === currLocation
            ) {
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
        </div>
      </div>
    </>
  );
}
