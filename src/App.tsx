import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ScrollToTop from './components/Utill/ScrollToTop';

import { RecoilRoot } from 'recoil';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Items } from './stores/recoil/items';
import MainPage from './pages/Main/MainPage';
import ProductPage from './pages/Product/ProductPage';
import ProductDetailPage from './pages/ProductDetail/ProductDetailPage';
import CartPage from './pages/Cart/CartPage';
import NotFound from './pages/NotFound/NotFound';

function App(): React.ReactElement {
  const products = localStorage.getItem('products');
  const [cart, setCart] = useState<Items[]>(products ? JSON.parse(products) : []);

  return (
    <RecoilRoot>
      <BrowserRouter>
        <ScrollToTop />
        <Header cart={cart} />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/clothing" element={<ProductPage />} />
          <Route path="/jewelery" element={<ProductPage />} />
          <Route path="/electronics" element={<ProductPage />} />
          <Route
            path="/product/:id"
            element={<ProductDetailPage cart={cart} setCart={setCart} />}
          />
          <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
