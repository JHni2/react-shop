import React, { useEffect } from 'react';
import styles from './ProductDetailPage.module.css';
import { Link, useParams } from 'react-router-dom';
import { Items, ItemsDatas } from '../stores/items';
import StarRate from '../components/StarRating';

interface CartProps {
  cart: Items[];
  setCart: React.Dispatch<React.SetStateAction<Items[]>>;
}

export default function ProductDetailPage(props: CartProps): React.ReactElement {
  const { id } = useParams();
  const currentItem = props.cart.filter((itemData) => itemData.id === Number(id))[0];
  const currItemInfo =
    currentItem == undefined
      ? ItemsDatas.filter((itemData) => itemData.id === Number(id))[0]
      : props.cart.filter((itemData) => itemData.id === Number(id))[0];

  const handleCartItems = (cartItemInfo: Items) => {
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
      ...currItemInfo,
      quantity: quantity,
    };
    props.setCart([...props.cart.slice(0, idx), newCartItem, ...props.cart.slice(idx + 1)]);
  };

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(props.cart));
  }, [props.cart]);

  return (
    <div className="wrapper">
      <section className={styles.pageContainer}>
        <div className={styles.breadcrumbs}>
          {currItemInfo.category[0]} &gt; {currItemInfo.title}
        </div>
        <div className={styles.productContainer}>
          <figure className={styles.imgContainer}>
            <img className={styles.img} src={currItemInfo.image} alt={currItemInfo.title} />
          </figure>
          <div className={styles.productInfo}>
            <h2 style={{ fontWeight: '700' }}>{currItemInfo.title}</h2>
            <p>{currItemInfo.description}</p>
            <div className={styles.ratingContainer}>
              <div>
                <StarRate rate={currItemInfo.rating.rate} />
              </div>
              <div>
                {currItemInfo.rating.rate} / {currItemInfo.rating.count} 참여
              </div>
            </div>
            <p className={styles.price}>${currItemInfo.price}</p>
            <div className={styles.ButtonContainer}>
              <button className="btn-main" onClick={() => handleCartItems(currItemInfo)}>
                장바구니에 담기
              </button>
              <Link to="/cart">
                <button className="btn-move">장바구니로 이동</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
