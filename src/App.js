import React, { useState } from 'react';
import style from './App.module.css';
import Header from './components/Header/Header.js';
import Categories from './components/Categories/Categories.js';
import ResourceTiles from './components/ResourceTiles/ResourceTiles';
import AddResource from './components/AddResource/AddResource.js';
import RecentResources from './components/RecentResources/RecentResources.js';

function App() {

  const [categories, setCategories ] = useState(['CSS', 'TDD', 'Redux', 'React', 'JavaScript', 'System Design', 'MongoDB'])

  return (
    <div className={style.App}>
      <div className={style.Head}>
        <Header />
      </div>
     <div className={`${style.main} ${style.container}`}>
      <div className={`${style.left} ${style.container}`}>
        <Categories categories={categories.slice(1)}/>
      </div>
      <div className={`${style.middle} ${style.container}`}>
        <h1>{categories[0]}</h1>
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
