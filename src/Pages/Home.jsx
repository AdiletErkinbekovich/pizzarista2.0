import React from 'react';
import axios from 'axios';
import Pagination from '../components/Pagination/index.jsx';
import { Categories, PizzaBlock, Sort, Skeleton } from '../components';

function Home({ inputValue, setInputValue }) {
  const [isLoading, setIsLoading] = React.useState(true);

  const [pizzas, setPizzas] = React.useState([]);
  React.useEffect(() => {
    axios
      .get(`https://68768680814c0dfa653c6992.mockapi.io/pizzas`)
      .then((res) => {
        const filtered = res.data.filter((pizza) =>
          pizza.name.toLowerCase().includes(inputValue.toLowerCase()),
        );
        setPizzas(filtered);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('GETTING PIZZAS ERROR', error);
      });
  }, [inputValue]);
  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
          : pizzas.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
      <div className="pagination">
        <Pagination />
      </div>
    </div>
  );
}

export default Home;
