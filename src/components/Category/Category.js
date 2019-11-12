import React from 'react';
import style from './Category.module.css';

function Category( { category, styleType } ) {

  if (styleType === 1) {
    console.log('something')
    return (
      <div className={`${style.Category} ${style.style1}`}>
        <h3>{category}</h3>
      </div>
    );
  } else {
    return (
      <div className={`${style.Category} ${style.style2}`}>
        <h3>{category}</h3>
      </div>
    );
  }
}

export default Category;