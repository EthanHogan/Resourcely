import React, { useEffect, useState } from 'react';
import style from './App.module.css';
import Header from './components/Header/Header.js';
import Categories from './components/Categories/Categories.js';
import ResourceTiles from './components/ResourceTiles/ResourceTiles';
import AddResource from './components/AddResource/AddResource.js';
import axios from 'axios';




const App = () => {

  const [categories, setCategories ] = useState([
    {
      name: 'CSS',
      resources: [
        {
          title: 'Flexbox Froggy',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm',
          link: 'https://flexboxfroggy.com/',
        },
        {
          title: 'CSS Best Practices',
          description: '',
          link: 'https://www.tothenew.com/blog/10-best-practices-in-css/'
        }
      ]
    },
    {
      name: 'TDD',
      resources: [
        {
          title: 'TDD 1',
          description: 'TDD 1 Description',
          link: 'https://flexboxfroggy.com/',
        },
        {
          title: 'TDD 2',
          description: '',
          link: 'https://www.tothenew.com/blog/10-best-practices-in-css/'
        },
        {
          title: 'TDD 3',
          description: 'TDD 1 Description',
          link: 'https://flexboxfroggy.com/',
        },
        {
          title: 'TDD 4',
          description: '',
          link: 'https://www.tothenew.com/blog/10-best-practices-in-css/'
        },
        {
          title: 'TDD 5',
          description: 'TDD 1 Description',
          link: 'https://flexboxfroggy.com/',
        },
        {
          title: 'TDD 6',
          description: '',
          link: 'https://www.tothenew.com/blog/10-best-practices-in-css/'
        },
        {
          title: 'TDD 7',
          description: 'TDD 1 Description',
          link: 'https://flexboxfroggy.com/',
        },
        {
          title: 'TDD 8',
          description: '',
          link: 'https://www.tothenew.com/blog/10-best-practices-in-css/'
        },
        {
          title: 'TDD 9',
          description: '',
          link: 'https://www.tothenew.com/blog/10-best-practices-in-css/'
        },
        {
          title: 'TDD 10',
          description: 'TDD 1 Description',
          link: 'https://flexboxfroggy.com/',
        },
        {
          title: 'TDD 11',
          description: '',
          link: 'https://www.tothenew.com/blog/10-best-practices-in-css/'
        },
        {
          title: 'TDD 12',
          description: '',
          link: 'https://www.tothenew.com/blog/10-best-practices-in-css/'
        },
        {
          title: 'TDD 13',
          description: 'TDD 1 Description',
          link: 'https://flexboxfroggy.com/',
        },
        {
          title: 'TDD 14',
          description: '',
          link: 'https://www.tothenew.com/blog/10-best-practices-in-css/'
        },
        {
          title: 'TDD 15',
          description: '',
          link: 'https://www.tothenew.com/blog/10-best-practices-in-css/'
        },
      ]
    },
  ])
  const [addingCategoryToggle, setAddingCategoryToggle] = useState(false);
  
  let currentCategory = categories[0];

// use this for development
  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://localhost:3007/all'
    })
    .then(response => {
      console.log(response.data)
      setCategories(response.data)
    })
  },[])

// use this for production
  // useEffect(() => {
  //   axios('/all')
  //   .then(response => {
  //     console.log(response.data)
  //     setCategories(response.data)
  //   })
  // }, [])


  function addCategory(newCategory) {
    if (!doesCategoryExist(categories, newCategory)){
      setCategories([newCategory, ...categories]);
      setAddingCategoryToggle(false);
    } else {
      setAddingCategoryToggle(false);
    }
  }

  // function postCategory(newCategory) {
  //   axios
  // }
  
  function changeCategory(category) {
    //find the index of categoryName in categories
    let targetIndex = categories.indexOf(category);
    // splice the name out
    categories.splice(targetIndex, 1)
    setCategories([category, ...categories])
  }

  function handleAddResource(resource) {
    let copyCategories = [...categories]
    let targetCategory = copyCategories.shift();
    targetCategory.resources.unshift(resource);
    setCategories([targetCategory, ...copyCategories]);
  }

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
        <h1>{currentCategory.name}</h1>
        <ResourceTiles resources={currentCategory.resources}/>
      </div>
      <div className={`${style.right} ${style.container}`}>
        <div className={`${style.top} ${style.container}`}>
          <AddResource  handleAddResource={handleAddResource}/>
        </div>

        {/* coming soon! */}
        {/* <div className={`${style.bottom} ${style.container}`}>
          <RecentResources />
        </div> */}
      </div>
     </div>
    </div>
  );
}

export default App;


//HELPER
export function doesCategoryExist(originalCats, newCat) {
  let result = false;
  originalCats.forEach((cat, index) => {
    if (cat.name.toLowerCase() === newCat.name.toLowerCase()) {
      result = true;
    }
  })
  console.log(result);
  return result;
}
