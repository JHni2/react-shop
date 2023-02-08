import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import FashionPage from './pages/FashionPage';
import MainPage from './pages/MainPage';

function App(): React.ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/fashion" element={<FashionPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
