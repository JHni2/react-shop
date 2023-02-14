import React, { useEffect } from 'react';
import styles from './ProductDetailPage.module.css';
import { Link, useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Items, ItemsDatas } from '../stores/items';
import StarRate from '../components/StarRating';

interface CartProps {
  cart: Items[];
  setCart: React.Dispatch<React.SetStateAction<Items[]>>;
}

export default function ProductDetailPage(props: CartProps): React.ReactElement {
  const { id } = useParams();
  const itemInfo = ItemsDatas.filter((itemData) => itemData.id === Number(id))[0];

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(props.cart));
  }, [props.cart]);

  const handleCartItems = (itemInfo: Items) => {
    itemInfo.quantity += 1;

    const newCartItem = {
      ...itemInfo,
    };

    const found = props.cart.find((el) => el.id === newCartItem.id);
    if (found) setQuantity(itemInfo.id, itemInfo.quantity);
    else props.setCart([...props.cart, newCartItem]);
  };

  const setQuantity = (id: Number, quantatiy: Number) => {
    const found = props.cart.filter((el) => el.id === id)[0];
    const idx = props.cart.indexOf(found);
    const newCartItem = {
      ...itemInfo,
      quantatiy: quantatiy,
    };
    props.setCart([...props.cart.slice(0, idx), newCartItem, ...props.cart.slice(idx + 1)]);
  };

  return (
    <div className="wrapper">
      <Header />
      <section className={styles.pageContainer}>
        <div className={styles.breadcrumbs}>
          {itemInfo.category[0]} &gt; {itemInfo.title}
        </div>
        <div className={styles.productContainer}>
          <figure className={styles.imgContainer}>
            <img className={styles.img} src={itemInfo.image} alt={itemInfo.title} />
          </figure>
          <div className={styles.productInfo}>
            <h2>{itemInfo.title}</h2>
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
              <button className="btn-primary" onClick={() => handleCartItems(itemInfo)}>
                장바구니에 담기
              </button>
              <Link to="/cart">
                <button className="btn-move">장바구니로 이동</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
