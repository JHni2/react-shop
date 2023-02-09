import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import ProductPage from './pages/ProductPage';

function App(): React.ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/fashion" element={<ProductPage />} />
        <Route path="/accessory" element={<ProductPage />} />
        <Route path="/digital" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
