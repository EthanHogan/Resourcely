import React from 'react';
import style from './AddCategory.module.css';


function AddCategory( { toggle }) {
  if (toggle) {
    return (
      <div className={style.empty}>
        
      </div>
    );
  }
  return (
    <div className={style.AddCategory}>
      <button>Add new category +</button>
    </div>
  );
}

export default AddCategory;