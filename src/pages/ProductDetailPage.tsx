import React from 'react';
import styles from './ProductDetailPage.module.css';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { ItemsDatas } from '../stores/items';
import StarRate from '../components/StarRating';

export default function ProductDetailPage(): React.ReactElement {
  const { id } = useParams();
  const itemInfo = ItemsDatas.filter((itemData) => itemData.id === Number(id));

  return (
    <div className="wrapper">
      <Header />
      <section className={styles.pageContainer}>
        <div className={styles.breadcrumbs}>홈 &gt; {itemInfo[0].title}</div>
        <div className={styles.productContainer}>
          <figure className={styles.imgContainer}>
            <img
              className={styles.img}
              src={itemInfo[0].image}
              alt={itemInfo[0].title}
            />
          </figure>
          <div className={styles.productInfo}>
            <h2>{itemInfo[0].title}</h2>
            <p>{itemInfo[0].description}</p>
            <div className={styles.ratingContainer}>
              <div>
                <StarRate rate={itemInfo[0].rating.rate} />
              </div>
              <div>
                {itemInfo[0].rating.rate} / {itemInfo[0].rating.count} 참여
              </div>
            </div>
            <p className={styles.price}>${itemInfo[0].price}</p>
            <div className={styles.ButtonContainer}>
              <button className={styles.btnAdd}>장바구니에 담기</button>
              <button className={styles.btnMove}>장바구니로 이동</button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
