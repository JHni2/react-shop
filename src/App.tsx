import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ScrollToTop from './components/ScrollToTop';
import CartPage from './pages/CartPage';
import MainPage from './pages/MainPage';
import NotFound from './pages/NotFound';
import ProductDetailPage from './pages/ProductDetailPage';
import ProductPage from './pages/ProductPage';
import { Items } from './stores/items';

function App(): React.ReactElement {
  const products = localStorage.getItem('products');
  const [cart, setCart] = useState<Items[]>(products ? JSON.parse(products) : []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/fashion" element={<ProductPage />} />
        <Route path="/accessory" element={<ProductPage />} />
        <Route path="/digital" element={<ProductPage />} />
        <Route path="/product/:id" element={<ProductDetailPage cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
