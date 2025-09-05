import React from 'react';

type CategoriesProps = {
  categoryId: number;
  onChangeCategory: (i: number) => void;
};

export const Categories: React.FC<CategoriesProps> = React.memo(
  ({ onChangeCategory, categoryId }) => {
    const categoryTypes = ['All', 'Meat', 'Vegetarian', 'Grill', 'Spicy', 'Closed'];
    return (
      <>
        <div className="categories">
          <ul>
            {categoryTypes.map((type, index) => (
              <li
                key={index}
                className={categoryId === index ? 'active' : ''}
                onClick={() => onChangeCategory(index)}
              >
                {type}
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  },
);
