import React from 'react';
import style from './Category.module.css';

function Category( { category, styleType } ) {

  if (styleType === 1) {
    return (
      <button className={`${style.Category} ${style.style1}`}>{category}</button>
    );
  } else {
    return (
      <button className={`${style.Category} ${style.style2}`}>{category}</button>
    );
  }
}

export default Category;