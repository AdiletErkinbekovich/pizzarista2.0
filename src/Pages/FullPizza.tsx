import React from 'react';
import { Link } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router';
import axios from 'axios';

const FullPizza: React.FC = () => {
  const [pizza, setPizza] = React.useState<{
    imageUrl: string;
    name: string;
    price: number;
  }>();
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          'https://68768680814c0dfa653c6992.mockapi.io/pizzas/' + id,
        );
        setPizza(data);
      } catch (error) {
        alert('ERROR while loading pizzas !');
        navigate('/');
      }
    }
    fetchPizza();
  }, []);

  if (!pizza) {
    return <>loading...</>;
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} alt="" />
      <h2>{pizza.name}</h2>
      <h4>{pizza.price}$</h4>
      <Link to={'/'}>
        <button className="button button--outline button--add">
          <path
            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
            fill="white"
          />

          <span>Go Back</span>
        </button>
      </Link>
    </div>
  );
};

export default FullPizza;
