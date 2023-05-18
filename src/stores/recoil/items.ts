import { atom, selector } from 'recoil';

export interface Items {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  quantity: number;
}

export const categories = [
  { ko: '패션', en: 'clothing' },
  { ko: '악세서리', en: 'jewelery' },
  { ko: '디지털', en: 'electronics' },
];

export const fakeAPI = 'https://fakestoreapi.com/products/';

export const itemList = selector<Items[]>({
  key: 'itemList',
  get: async () => {
    try {
      const response = await fetch(fakeAPI);
      return (await response.json()) || [];
    } catch (error) {
      console.log(`Error: \n${error}`);
      return [];
    }
  },
});

export const cartItemList = atom({
  key: 'cartItem',
  default: {},
  effects: [
    ({ setSelf, onSet }) => {
      localStorage.getItem('CART_ITEM') &&
        setSelf(JSON.parse(localStorage.getItem('CART_ITEM') as string));
      onSet((value) => localStorage.setItem('CART_ITEM', JSON.stringify(value)));
    },
  ],
});
