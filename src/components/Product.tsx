import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { ItemsDatas } from '../stores/items';
import { themeDarkState } from '../stores/recoil/theme';
import styles from './Product.module.css';

interface Props {
  type: string;
}

export default function Product(props: Props): React.ReactElement {
  let category = props.type;
  const location = useLocation();
  const [currLocation, setCurrLocation] = useState('/');
  const themeDark = useRecoilValue(themeDarkState);
  const navigate = useNavigate();

  useEffect(() => {
    setCurrLocation(location.pathname.slice(1));
  }, [location]);

  if (currLocation === 'fashion') category = '패션';
  if (currLocation === 'accessory') category = '악세서리';
  if (currLocation === 'digital') category = '디지털';

  return (
    <>
      {currLocation ? <div className={styles.breadcrumbs}>홈 &gt; {category}</div> : <></>}
      <div className={styles.itemsContainer}>
        <h2 className={styles.itemTitle}>{category}</h2>
        <div className={styles.itemWrapper}>
          {ItemsDatas.map((item, index) => {
            if (
              (item.category[0] === props.type && index < 12) ||
              item.category[1] === currLocation
            ) {
              return (
                <div
                  key={item.id}
                  className={themeDark ? styles.itemBox : styles.itemBoxLightTheme}
                  onClick={() => {
                    navigate(`/product/${item.id}`);
                  }}
                >
                  <figure className={styles.imgBox}>
                    <img className={styles.itemImg} alt={item.image} src={item.image} />
                  </figure>
                  <div className={themeDark ? styles.des : styles.desLightTheme}>
                    <p className="text-bold-16 truncate">{item.title}</p>
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
