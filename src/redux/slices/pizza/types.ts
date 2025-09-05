export type Pizza = {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  type: number;
  size: number;
};

export enum Status {
  loading = 'loading',
  success = 'success',
  error = 'error',
}

export interface PizzaSliceState {
  items: Pizza[];
  status: Status;
}

export type SearchPizzaParams = {
  sortBy: string;
  order: string;
  category: string;
  search: string;
  currentPage: string;
};
