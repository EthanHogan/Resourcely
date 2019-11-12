import React, { useState } from 'react';
import style from './Categories.module.css';
import AddCategory from '../AddCategory/AddCategory.js';
import Category from '../Category/Category.js';
import AddCategoryField from '../AddCategoryField/AddCategoryField.js';

function Categories( { categories }) {

  const [addingCategoryToggle, setAddingCategoryToggle] = useState(true);

  return (
    <div className={style.Categories}>
      <h2>Categories</h2>
      <AddCategory toggle={addingCategoryToggle}/>
      {addingCategoryToggle ? (<AddCategoryField />) : (<div></div>)}
      {categories.map((category, index) => {
        if (index % 2 === 0) {
          return <Category key={category} category={category} styleType={1}/>
        } else {
          return <Category key={category} category={category} styleType={2}/>
        }
      })}
    </div>
  );
}

export default Categories;