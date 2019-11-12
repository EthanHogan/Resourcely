import React from 'react';
import style from './AddCategoryField.module.css';

function AddCategoryField( { toggle } ) {

  if (!toggle) {
    return (
      <div className={style.AddCategoryField}>
        <input type="text" name="addCategory" maxlength="20" placeholder="Category Name"></input> 
        <button type="submit" name="addCategoryButton">Add</button>
      </div>
    );
  }
}

export default AddCategoryField;