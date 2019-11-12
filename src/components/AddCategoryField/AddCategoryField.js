import React, { useEffect, useState } from 'react';
import style from './AddCategoryField.module.css';

function AddCategoryField( { toggle, addCategory } ) {

  const [textField, setTextField] = useState('');

  function handleChange(event) {
    let text = event.target.value;
    setTextField(text);
  }

  function handleSubmit(event) { 
    if (event.key === 'Enter' && textField.length !== 0) {
      addCategory(textField);
      setTextField('');
    }

    
  }

  // useEffect(() => {console.log(textField)})






  if (!toggle) {
    return (
      <div className={style.AddCategoryField}>
        <input 
        type="text" 
        name="addCategory" 
        maxLength="20"
        value={textField} 
        placeholder="Category Name" 
        autoFocus="autofocus"
        onChange={handleChange} 
        onKeyDown={handleSubmit}>
        </input> 
        <button type="submit" name="addCategoryButton">Add</button>
      </div>
    );
  }
}

export default AddCategoryField;