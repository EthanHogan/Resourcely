import React from 'react';
import style from './AddCategory.module.css';


function AddCategory( { toggle, setAddingCategoryToggle }) {

  function handleClick(event) {
    setAddingCategoryToggle(true);
  }

  function handleEnter(event) {
    if (event.key === 'Enter') {
      setAddingCategoryToggle(true);
    }
  }



  if (toggle) {
    return (
      <div>
        
      </div>
    );
  }
  return (
    <div className={style.AddCategory}>
      <button onKeyDown={handleEnter} onClick={handleClick}>Add new category +</button>
    </div>
  );
}

export default AddCategory;