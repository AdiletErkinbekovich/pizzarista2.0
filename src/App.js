import React from 'react';
import style from './scss/app.scss';
import Home from './Pages/Home.jsx';
import { Header } from './components/index.jsx';
import NotFound from './Pages/NotFound.jsx';
import { Routes, Route } from 'react-router-dom';
import Cart from './Pages/Cart.jsx';

function App() {
  return (
    <div className="wrapper">
      <Header />

      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
//
