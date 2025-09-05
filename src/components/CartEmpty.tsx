import React from 'react';
import emptyCartImg from '../assets/img/empty-cart.png';
import { Link } from 'react-router-dom';

export const CartEmpty: React.FC = () => (
  <div className="cart cart--empty">
    <h2>
      Cart is empty <span>😕</span>
    </h2>
    <p>
      Most likely, you haven’t ordered any pizza yet.
      <br />
      To order pizza, go to the main page.
    </p>
    <img src={emptyCartImg} alt="Empty cart" />
    <Link to="/" className="button button--black">
      <span>Go back</span>
    </Link>
  </div>
);
