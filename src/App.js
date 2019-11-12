import React, { useEffect, useState } from 'react';
import style from './App.module.css';
import Header from './components/Header/Header.js';
import Categories from './components/Categories/Categories.js';
import ResourceTiles from './components/ResourceTiles/ResourceTiles';
import AddResource from './components/AddResource/AddResource.js';
import RecentResources from './components/RecentResources/RecentResources.js';

function App() {

  const [categories, setCategories ] = useState(['CSS', 'TDD', 'Redux', 'React', 'JavaScript', 'System Design', 'MongoDB'])
  const [addingCategoryToggle, setAddingCategoryToggle] = useState(false);
  
  let currentCategory = categories[0];


  function addCategory(categoryName) {
    if (!doesCategoryExist(categoryName)) {
      setCategories([categoryName, ...categories]);
      setAddingCategoryToggle(false);
    } else {
      setAddingCategoryToggle(false);
    }
  }

  function doesCategoryExist(categoryName) {
    categoryName = categoryName.toLowerCase();
    let currentCategories = lowerCaseCategories();
    let result = false;
    currentCategories.forEach((category, index) => {
      if (categoryName === category) {
        result = true;
      }
    })
    return result;
  }

  function lowerCaseCategories() {
    let currentCategories = categories.map((category) => {
      return category.toLowerCase();
    })
    return currentCategories;
  }

  function changeCategory(categoryName) {
    //find the index of categoryName in categories
    let targetIndex = categories.indexOf(categoryName);
    // splice the name out
    categories.splice(targetIndex, 1)
    setCategories([categoryName, ...categories])
  }

  // useEffect(() => console.log(categories));




  return (
    <div className={style.App}>
      <div className={style.Head}>
        <Header />
      </div>
     <div className={`${style.main} ${style.container}`}>
      <div className={`${style.left} ${style.container}`}>
        <Categories 
        categories={categories} 
        addCategory={addCategory} 
        addingCategoryToggle={addingCategoryToggle} 
        setAddingCategoryToggle={setAddingCategoryToggle}
        changeCategory={changeCategory}
        />
      </div>
      <div className={`${style.middle} ${style.container}`}>
        <h1>{currentCategory}</h1>
        <ResourceTiles />
      </div>
      <div className={`${style.right} ${style.container}`}>
        <div className={`${style.top} ${style.container}`}>
          <AddResource />
        </div>
        <div className={`${style.bottom} ${style.container}`}>
          <RecentResources />
        </div>
      </div>
     </div>
    </div>
  );
}

export default App;
