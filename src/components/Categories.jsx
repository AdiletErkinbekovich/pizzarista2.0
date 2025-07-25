import React from 'react';

function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const categoryTypes = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <>
      <div className="categories">
        <ul>
          {categoryTypes.map((type, index) => (
            <li
              key={index}
              className={activeIndex === index ? 'active' : ''}
              onClick={() => setActiveIndex(index)}
            >
              {type}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Categories;
