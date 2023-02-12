import styles from './SearchProduct.module.css';

import { useState } from 'react';
import { ItemsDatas } from '../stores/items';
import useModal from '../hooks/useModal';
import Modal from './Modal';
import { Link } from 'react-router-dom';

export default function SearchProduct() {
  const [input, setInput] = useState('');

  const searched = ItemsDatas.filter((item) =>
    item.title.toLocaleLowerCase().includes(input.toLocaleLowerCase()),
  );

  const { isOpen, toggle } = useModal();

  return (
    <>
      <input
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        placeholder="검색"
        className={styles.inputText}
        onClick={toggle}
      />
      <Modal isOpen={isOpen} toggle={toggle}>
        <ul className={styles.serachedContainer}>
          {input.length > 0 &&
            searched.map((item) => {
              return (
                <Link to={{ pathname: `/product/${item.id}` }} key={item.title}>
                  <li className={styles.searchList}>
                    <span className={styles.searchListText}>{item.title}</span>
                  </li>
                </Link>
              );
            })}
        </ul>
      </Modal>
    </>
  );
}
