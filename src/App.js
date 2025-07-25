import React from 'react';
import axios from 'axios';
import style from './scss/app.scss';
import Home from './Pages/Home.jsx';
import { Header } from './components/index.jsx';

function App() {
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
    <div className="wrapper">
      <Header />

      <div className="content">
        <Home pizzas={pizzas} setIsLoading={setIsLoading} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default App;
