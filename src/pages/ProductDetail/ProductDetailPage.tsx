import React, { useEffect, useState } from 'react';
import styles from './ProductDetailPage.module.css';
import { Link, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import axios from 'axios';
import { categories, fakeAPI, Items } from '../../stores/recoil/items';
import { themeDarkState } from '../../stores/recoil/theme';
import StarRate from '../../components/Utill/StarRating';

interface CartProps {
  cart: Items[];
  setCart: React.Dispatch<React.SetStateAction<any[]>>;
}

export default function ProductDetailPage(props: CartProps): React.ReactElement {
  const { id } = useParams();
  const themeDark = useRecoilValue(themeDarkState);
  const [itemInfo, setItemInfo] = useState<Items>();

  const getItemInfo = async () => {
    try {
      const response = await axios.get(fakeAPI + id);
      return await response.data;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchItemInfo = async () => {
      setItemInfo(await getItemInfo());
    };

    fetchItemInfo();
  }, [id]);

  const handleCartItems = (cartItemInfo: Items) => {
    if (isNaN(cartItemInfo.quantity)) {
      cartItemInfo.quantity = 0;
    }
    cartItemInfo.quantity += 1;

    const newCartItem = {
      ...cartItemInfo,
      quantity: cartItemInfo.quantity,
    };

    const found = props.cart.find((el) => el.id === newCartItem.id);
    if (found) setQuantity(cartItemInfo.id, cartItemInfo.quantity);
    else props.setCart([...props.cart, newCartItem]);
  };

  const setQuantity = (id: number, quantity: number) => {
    const found = props.cart.filter((el) => el.id === id)[0];
    const idx = props.cart.indexOf(found);
    const newCartItem = {
      ...itemInfo,
      quantity: quantity,
    };

    console.log(newCartItem);
    props.setCart([...props.cart.slice(0, idx), newCartItem, ...props.cart.slice(idx + 1)]);
  };

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(props.cart));
  }, [props.cart]);

  return (
    <div className={themeDark ? 'wrapper' : 'wrapperLightTheme'}>
      {itemInfo ? (
        <section className={styles.pageContainer}>
          <div className={styles.breadcrumbs}>
            {categories.map((category) => {
              if (itemInfo.category.includes(category.en)) {
                return `${category.ko} > ${itemInfo.title}`;
              }
              return null;
            })}
          </div>
          <div className={styles.productContainer}>
            <figure className={styles.imgContainer}>
              <img className={styles.img} src={itemInfo.image} alt={itemInfo.title} />
            </figure>
            <div className={styles.productInfo}>
              <h2 style={{ fontWeight: '700' }}>{itemInfo.title}</h2>
              <p>{itemInfo.description}</p>
              <div className={styles.ratingContainer}>
                <div>
                  <StarRate rate={itemInfo.rating.rate} />
                </div>
                <div>
                  {itemInfo.rating.rate} / {itemInfo.rating.count} 참여
                </div>
              </div>
              <p className={styles.price}>${itemInfo.price}</p>
              <div className={styles.ButtonContainer}>
                <button className="btn-main" onClick={() => handleCartItems(itemInfo)}>
                  장바구니에 담기
                </button>
                <Link to="/cart">
                  <button className="btn-move">장바구니로 이동</button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className={styles.pageContainer}></section>
      )}
    </div>
  );
}
