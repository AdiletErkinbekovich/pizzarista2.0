import React from 'react';
import axios from 'axios';

import { Categories, PizzaBlock, Sort, Skeleton } from '../components';

function Home() {
  const [isLoading, setIsLoading] = React.useState(true);

  const [pizzas, setPizzas] = React.useState([]);
  React.useEffect(() => {
    axios
      .get('https://68768680814c0dfa653c6992.mockapi.io/pizzas')
      .then((res) => setPizzas(res.data), setIsLoading(false))
      .catch((error) => {
        console.error('GETTING PIZZAS ERROR', error);
      });
  }, []);
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
    </div>
  );
}

export default Home;
