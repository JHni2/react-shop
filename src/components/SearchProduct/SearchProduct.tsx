import styles from './SearchProduct.module.css';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useRecoilValueLoadable } from 'recoil';
import { themeDarkState } from '../../stores/recoil/theme';
import { itemList } from '../../stores/recoil/items';
import useModal from '../../hooks/useModal';
import SearchModal from '../../Modals/SearchModal';

interface SearchToggleType {
  searchToggle: boolean;
  setSearchToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SearchProduct(props: SearchToggleType) {
  const [input, setInput] = useState('');
  const themeDark = useRecoilValue(themeDarkState);
  const itemsLodable = useRecoilValueLoadable(itemList);
  let items = 'hasValue' === itemsLodable.state ? itemsLodable.contents : [];
  const navigate = useNavigate();

  const searched = items.filter((item) =>
    item.title.toLocaleLowerCase().includes(input.toLocaleLowerCase()),
  );

  const { isOpen, toggle } = useModal();

  useEffect(() => {
    isOpen ? props.setSearchToggle(true) : props.setSearchToggle(false);
  }, [isOpen]);

  return (
    <>
      <input
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        placeholder="검색"
        className={themeDark ? styles.inputText : styles.inputTextLightTheme}
        onFocus={toggle}
      />
      <SearchModal isOpen={isOpen} toggle={toggle}>
        <ul className={themeDark ? styles.serachedContainer : styles.serachedContainerLightTheme}>
          {input.length > 0 &&
            searched.map((item) => {
              return (
                <li
                  key={item.id}
                  onClick={() => {
                    setInput('');
                    navigate(`/product/${item.id}`);
                  }}
                  className={themeDark ? styles.searchList : styles.searchListLightTheme}
                >
                  <span className={styles.searchListText}>{item.title}</span>
                </li>
              );
            })}
        </ul>
      </SearchModal>
    </>
  );
}
