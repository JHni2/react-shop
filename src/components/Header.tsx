import { useNavigate } from 'react-router-dom';
import { Items } from '../stores/items';
import styles from './Header.module.css';
import SearchProduct from './SearchProduct';

export default function Header() {
  const navigate = useNavigate();

  const getCartCount = localStorage.getItem('products');
  let cartCount = 0;

  if (getCartCount !== null) {
    JSON.parse(getCartCount).forEach((item: Items) => {
      cartCount += item.quantity;
    });
  }

  return (
    <div className={styles.navContainer}>
      <div className={styles.nav}>
        <label className={`${styles.label} ${styles.menu}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </label>
        <h1 className={styles.title} onClick={() => navigate('/')}>
          React Shop
        </h1>
        <div className={`${styles.navCategory} ml`}>
          <span onClick={() => navigate('/fashion')} className={styles.category}>
            패션
          </span>
          <span onClick={() => navigate('/accessory')} className={styles.category}>
            악세서리
          </span>
          <span onClick={() => navigate('/digital')} className={styles.category}>
            디지털
          </span>
        </div>
        <div className={styles.flex}>
          <label className={styles.label}>
            <input className={styles.checkbox} type="checkbox" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className={`${styles.swapOff} bi bi-sun`}
              viewBox="0 0 16 16"
            >
              <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
            </svg>
          </label>
          <div className={styles.searchBox}>
            <SearchProduct />
          </div>
          <div className={styles.label} onClick={() => navigate('/cart')}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className={`${styles.cursor} bi bi-bag`}
              viewBox="0 0 16 16"
            >
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
            </svg>
            {cartCount > 0 && <div className={styles.cartCount}>{cartCount}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}
