import React from 'react';
import { Categories, Header, PizzaBlock, Sort } from './components';
import axios from 'axios';
import style from './scss/app.scss';
function App() {
  const [pizzas, setPizzas] = React.useState([]);
  React.useEffect(() => {
    axios
      .get('https://68768680814c0dfa653c6992.mockapi.io/pizzas')
      .then((res) => setPizzas(res.data))
      .catch((error) => {
        console.error('GETTING PIZZAS ERROR', error);
      });
  }, []);

  return (
    <div className="wrapper">
      <div className="content">
        <Header />

        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {pizzas.map((obj) => (
              <PizzaBlock {...obj} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
