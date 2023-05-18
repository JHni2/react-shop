import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import CartPage from './pages/CartPage';
import MainPage from './pages/MainPage';
import NotFound from './pages/NotFound';
import ProductDetailPage from './pages/ProductDetailPage';
import ProductPage from './pages/ProductPage';
import { Items } from './stores/items';
import { RecoilRoot } from 'recoil';

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
