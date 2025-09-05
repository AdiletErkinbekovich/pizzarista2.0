import React, { Suspense } from 'react';
import './scss/app.scss';

import Home from './Pages/Home';

import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
const Cart = React.lazy(() => import(/* webpackChunkName: "Cart" */ './Pages/Cart'));
const FullPizza = React.lazy(() => import(/* webpackChunkName: "FullPizza" */ './Pages/FullPizza'));
const NotFound = React.lazy(() => import(/* webpackChunkName: "NotFound" */ './Pages/NotFound'));

function App() {
  return (
    <Routes>
      <Route path="" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route
          path="cart"
          element={
            <Suspense fallback={<div>Cart is loading...</div>}>
              <Cart />
            </Suspense>
          }
        />
        <Route
          path="pizza/:id"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <FullPizza />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
