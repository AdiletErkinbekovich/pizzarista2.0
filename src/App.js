import React from 'react';
import style from './scss/app.scss';
import Home from './Pages/Home.jsx';
import { Header } from './components/index.jsx';

import { Routes, Route } from 'react-router-dom';
import Cart from './Pages/Cart.jsx';

function App() {
  const [inputValue, setInputValue] = React.useState('');

  return (
    <div className="wrapper">
      <Header inputValue={inputValue} setInputValue={setInputValue} />

      <div className="content">
        <Routes>
          <Route
            path="/"
            element={<Home inputValue={inputValue} setInputValue={setInputValue} />}
          />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
//
