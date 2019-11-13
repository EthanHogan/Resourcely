import React from 'react';
import style from './Category.module.css';

function Category( { category, styleType, changeCategory } ) {


  function handleClick(event) {
    //do something
    changeCategory(category);
  }

  if (styleType === 1) {
    return (
      <button 
      className={`${style.Category} ${style.style1}`}
      onClick={handleClick}
      name={category.name}>
      {category.name}
      </button>
    );
  } else {
    return (
      <button 
      className={`${style.Category} ${style.style2}`}
      onClick={handleClick}
      name={category.name}>
      {category.name}
      </button>
    );
  }
}

export default Category;