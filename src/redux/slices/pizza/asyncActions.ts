import { createAsyncThunk } from '@reduxjs/toolkit';
import { Pizza, SearchPizzaParams } from './types';
import axios from 'axios';

export const fetchPizzas = createAsyncThunk<Pizza[], SearchPizzaParams>(
  'pizza/fetchPizzasStatus',
  async (params) => {
    const { sortBy, order, category, search, currentPage } = params;
    const { data } = await axios.get<Pizza[]>(
      `https://68768680814c0dfa653c6992.mockapi.io/pizzas?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
    );
    return data;
  },
);

export default fetchPizzas;
