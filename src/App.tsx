import React from 'react';
<<<<<<< HEAD
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
=======
import './App.css';

function App(): React.ReactElement {
  return <div>하이</div>;
>>>>>>> 1d72b9250245086797f8782736181e4df7e4bfb1
}

export default App;
