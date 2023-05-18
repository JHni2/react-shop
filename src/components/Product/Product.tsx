import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilValue, useRecoilValueLoadable } from 'recoil';
import { itemList } from '../../stores/recoil/items';
import { themeDarkState } from '../../stores/recoil/theme';
import styles from './Product.module.css';

interface Props {
  type?: string;
}

export default function Product(props: Props): React.ReactElement {
  let category = props.type;
  const location = useLocation();
  const [currLocation, setCurrLocation] = useState('');
  const themeDark = useRecoilValue(themeDarkState);
  const navigate = useNavigate();
  let itemCount = 0;

  useEffect(() => {
    setCurrLocation(location.pathname.slice(1));
  }, [location]);

  if (currLocation === 'clothing') category = '패션';
  if (currLocation === 'jewelery') category = '악세서리';
  if (currLocation === 'electronics') category = '디지털';

  const itemsLodable = useRecoilValueLoadable(itemList);
  let items = 'hasValue' === itemsLodable.state ? itemsLodable.contents : [];

  return (
    <>
      {currLocation ? <div className={styles.breadcrumbs}>홈 &gt; {category}</div> : <></>}
      <div className={styles.itemsContainer}>
        <h2 className={styles.itemTitle}>{category}</h2>
        <div className={styles.itemWrapper}>
          {items.length > 0
            ? items.map((item) => {
                if (
                  (category === '패션' && item.category.includes('clothing')) ||
                  (category === '악세서리' && item.category.includes('jewelery')) ||
                  (category === '디지털' && item.category.includes('electronics'))
                ) {
                  if (itemCount < 4 && currLocation === '') {
                    itemCount++;
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
                  } else if (currLocation !== '') {
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
                }
                return;
              })
            : Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className={themeDark ? styles.itemBox : styles.itemBoxLightTheme}>
                  <figure className={styles.imgBox}></figure>
                  <div className={themeDark ? styles.des : styles.desLightTheme}></div>
                </div>
              ))}
        </div>
      </div>
    </>
  );
}
