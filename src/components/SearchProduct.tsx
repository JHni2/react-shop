import { FormEvent, useState } from 'react';
import { Items, ItemsDatas } from '../stores/items';
import styles from './Header.module.css';

interface SearchProductProps {
  onUpdateProduct: (products: Items[]) => void;
}

export default function SearchProduct(props: SearchProductProps) {
  const [keyword, setKeyword] = useState('');
  const [inputs, setInputs] = useState<Items[]>([]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault;
    searchInputs(keyword);
  };

  const searchInputs = (input: string) => {
    if (!input) {
      alert('검색할 물건을 입력해주세요!');
    }
  };

  if (keyword.length > 0) {
    const searchProductInfos = ItemsDatas.filter((item) => {
      if (item.title.includes(keyword)) return item.title;
    });

    props.onUpdateProduct(searchProductInfos);
    setInputs(searchProductInfos);
    // console.log(searchProductInfos);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={keyword}
        onChange={(e) => {
          setKeyword(e.target.value);
        }}
        placeholder="검색"
        className={styles.inputText}
      />
    </form>
  );
}
