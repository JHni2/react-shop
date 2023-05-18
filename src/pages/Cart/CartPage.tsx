import styles from './CartPage.module.css';

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { Items } from '../../stores/recoil/items';
import { themeDarkState } from '../../stores/recoil/theme';
import BuyModal from '../../Modals/BuyModal';

interface CartProps {
  cart: Items[];
  setCart: React.Dispatch<React.SetStateAction<Items[]>>;
}

export default function CartPage(props: CartProps): React.ReactElement {
  const [showModal, setShowModal] = useState(false);
  const themeDark = useRecoilValue(themeDarkState);
  let totalPrice = 0;

  const handleCount = (product: Items, type: string) => {
    type === 'minus' ? (product.quantity -= 1) : (product.quantity += 1);

    const found = product;
    const idx = props.cart.indexOf(found);
    const newCartItem = {
      ...product,
      quantity: product.quantity,
    };
    props.setCart([...props.cart.slice(0, idx), newCartItem, ...props.cart.slice(idx + 1)]);

    if (product.quantity === 0) {
      props.setCart([...props.cart.slice(0, idx), ...props.cart.slice(idx + 1)]);
    }
  };

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(props.cart));
  }, [props.cart]);

  props.cart.forEach((item) => {
    totalPrice += item.quantity * item.price;
  });

  return (
    <>
      <BuyModal setCart={props.setCart} show={showModal} onHide={() => setShowModal(false)} />
      <div className={themeDark ? 'wrapper' : 'wrapperLightTheme'}>
        <section className={styles.pageContainer}>
          <div className={styles.breadcrumbs}>홈 &gt; 장바구니</div>
          <div className={styles.cartContainer}>
            {props.cart.length > 0 ? (
              <>
                <div className={styles.priceBox}>
                  <span className="text-medium-24">총 : ${totalPrice.toLocaleString('ko-KR')}</span>
                  <button className="btn-main" onClick={() => setShowModal(true)}>
                    모두 구매하기
                  </button>
                </div>
                {props.cart.map((product: Items) => {
                  return (
                    <div className={styles.productContainer} key={product.id}>
                      <div className={styles.productBox}>
                        <Link to={`/product/${product.id}`}>
                          <figure className={styles.imgContainer}>
                            <img className={styles.img} src={product.image} alt="itemImg" />
                          </figure>
                        </Link>
                        <div className={styles.cardBox}>
                          <h2>
                            <Link to={`/product/${product.id}`} className="text-bold-20">
                              {product.title}
                            </Link>
                          </h2>
                          <p className="title-medium-30">
                            ${(product.price * product.quantity).toLocaleString('ko-KR')}
                          </p>
                          <div className={styles.btnGroup}>
                            <button
                              className="btn-main"
                              onClick={() => handleCount(product, 'minus')}
                              style={{
                                borderTopRightRadius: '0',
                                borderBottomRightRadius: '0',
                              }}
                            >
                              -
                            </button>
                            <button className={themeDark ? 'btn-ghost' : 'btn-ghostLightTheme'}>
                              {product.quantity}
                            </button>
                            <button
                              className="btn-main"
                              onClick={() => handleCount(product, 'plus')}
                              style={{
                                borderTopLeftRadius: '0',
                                borderBottomLeftRadius: '0',
                              }}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            ) : (
              <>
                <div>
                  <h1 className="text-medium-24">장바구니에 물품이 없습니다.</h1>
                  <Link to="/">
                    <button className="btn-main" style={{ marginTop: '3.5rem' }}>
                      담으러 가기
                    </button>
                  </Link>
                </div>
              </>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
