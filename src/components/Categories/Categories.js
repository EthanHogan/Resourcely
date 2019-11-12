import React from 'react';
import style from './Categories.module.css';
import AddCategory from '../AddCategory/AddCategory.js';
import Category from '../Category/Category.js';

function Categories() {
  return (
    <div className={style.Categories}>
      <h2>Categories</h2>
      <AddCategory />
      <Category />
    </div>
  );
}

export default Categories;