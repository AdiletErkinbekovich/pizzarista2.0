import React from 'react';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { PizzaBlock, Skeleton, Categories, Sort } from '../components';
import Pagination from '../components/Pagination';
import { setCategoryId, setCurrentPage } from '../redux/slices/filter/slice';

import { useAppDispatch } from '../redux/store';
import { selectFilter } from '../redux/slices/filter/selectors';
import { selectPizzaData } from '../redux/slices/pizza/selectors';
import { fetchPizzas } from '../redux/slices/pizza/asyncActions';

function Home() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { items, status } = useSelector(selectPizzaData);

  const { categoryId, sort, currentPage, searchValue } = useSelector(selectFilter);

  const onChangeCategory = React.useCallback((id: number) => {
    dispatch(setCategoryId(id));
  }, []);
  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };
  const getPizzas = async () => {
    const sortBy = sort?.sortProperty?.replace('-', '');
    const order = sort?.sortProperty?.includes('-') ? 'asc' : 'desc';
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    dispatch(
      fetchPizzas({
        sortBy,
        order,
        category,
        search,
        currentPage: String(currentPage),
      }),
    );

    window.scrollTo(0, 0);
  };

  // React.useEffect(() => {
  //   if (isMounted.current) {
  //     const queryString = qs.stringify({
  //       categoryId,

  //       sortProperty: sort.sortProperty,
  //       currentPage,
  //     });
  //     navigate(`?${queryString}`);
  //   }
  //   if (!window.location.search) {
  //     dispatch(fetchPizzas({} as SearchPizzaParams));
  //   }

  //   isMounted.current = true;
  // }, [categoryId, sort.sortProperty, currentPage]);
  // // Если изменили параметры и был первый рендер то в этом случае будет проверка

  React.useEffect(() => {
    getPizzas();
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);
  // Если был первый рендер то запрашиваем пиццы

  // React.useEffect(() => {
  //   if (window.location.search) {
  //     const params = qs.parse(window.location.search.substring(1)) as unknown as SearchPizzaParams;
  //     const sort = list.find((obj) => obj.sortProperty === params.sortBy);

  //     dispatch(
  //       setFilters({
  //         searchValue: params.search,
  //         categoryId: Number(params.category),
  //         currentPage: Number(params.currentPage),
  //         sort: sort || list[0],
  //       }),
  //     );
  //     isSearch.current = true;
  //   }
  // }, []);
  // // Если был первый рендер , то проверяем URL - параметры и сохраняем в редаксе

  return (
    <div className="container">
      <div className="content__top">
        <Categories categoryId={categoryId} onChangeCategory={onChangeCategory} />
        <Sort value={sort} />
      </div>
      <h2 className="content__title">All Pizzas</h2>
      {status === 'error' ? (
        <div className="content__error-info">
          <h2>Something Went Wrong 😞 </h2>
          <p>Pizzas wasn't downloaded , try again later please. </p>
        </div>
      ) : (
        <div className="content__items">
          {status === 'loading'
            ? [...new Array(4)].map((_, index) => <Skeleton key={index} />)
            : items.map((obj: any) => <PizzaBlock key={obj.id} {...obj} />)}
        </div>
      )}
      <div className="pagination">
        <Pagination currentPage={currentPage} onChangePage={onChangePage} />
      </div>
    </div>
  );
}

export default Home;
