import React, { useState } from 'react';
import style from './Categories.module.css';
import AddCategory from '../AddCategory/AddCategory.js';
import Category from '../Category/Category.js';
import AddCategoryField from '../AddCategoryField/AddCategoryField.js';

function Categories( { categories, addCategory, addingCategoryToggle, setAddingCategoryToggle, changeCategory }) {

  return (
    <div className={style.Categories}>
      <h2>Categories</h2>
      <AddCategory toggle={addingCategoryToggle} setAddingCategoryToggle={setAddingCategoryToggle}/>
      {addingCategoryToggle ? (<AddCategoryField addCategory={addCategory} />) : (<div></div>)}
      {categories.map((category, index) => {
        if (index % 2 === 0) {
          return <Category key={category} category={category} styleType={1} changeCategory={changeCategory}/>
        } else {
          return <Category key={category} category={category} styleType={2} changeCategory={changeCategory}/>
        }
      })}
    </div>
  );
}

export default Categories;