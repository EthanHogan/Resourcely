import React, { useState } from 'react';
import style from './AddResource.module.css';

function AddResource( {handleAddResource} ) {

  const [titleField, setTitleField] = useState('');
  const [descriptionField, setDescriptionField] = useState('');
  const [linkField, setLinkField] = useState('');


  function handleAddClick() {
    if (titleField.length > 0 && linkField.length > 0) {
      let newResource = {
        title: titleField,
        descripion: descriptionField,
        link: linkField,
      }
      handleAddResource(newResource);
      setTitleField('');
      setDescriptionField('');
      setLinkField('');
    } else {
      setTitleField('');
      setDescriptionField('');
      setLinkField('');
    }
  }

  function handleAddPress(event) {
    if (event.key === 'Enter' && titleField.length > 0 && linkField.length > 0) {
      let newResource = {
        title: titleField,
        descripion: descriptionField,
        link: linkField,
      }
      handleAddResource(newResource)
      setTitleField('');
      setDescriptionField('');
      setLinkField('');
    }
    else if (event.key === 'Enter') {
      setTitleField('');
      setDescriptionField('');
      setLinkField('');
    }
  }

  function handleTitleChange(event) {
    let text = event.target.value;
    setTitleField(text);
  };
  function handleDescriptionChange(event) {
    let text = event.target.value;
    setDescriptionField(text);
  }

  function handleLinkChange(event) {
    let text = event.target.value;
    setLinkField(text);
  }



  return (
    <div className={style.AddResource}>
      <h2>
        Add a resource:
      </h2>
      <div className={style.form}>

        <h3>Title</h3>

        <input 
        className={`${style.field} ${style.titleField}`} 
        type="text" 
        name="title"
        maxLength="40"
        onChange={handleTitleChange}
        onKeyDown={handleAddPress}
        value={titleField}
        ></input>

        <br></br>

        <h3>Description</h3>

        <textarea className={`${style.field} ${style.descriptionField}`} 
        type="text" 
        name="description"
        maxLength="140"
        onChange={handleDescriptionChange}
        onKeyDown={handleAddPress}
        value={descriptionField}
        ></textarea>

        <br></br>

        <h3>Link</h3>

        <input 
        className={`${style.field} ${style.linkField}`} 
        type="text" 
        name="link"
        onChange={handleLinkChange}
        onKeyDown={handleAddPress}
        value={linkField}
        ></input>

        <br></br>

        <input 
        className={style.submitButton} 
        type="button" 
        name="AddResourceSubmit" 
        value="Add" 
        onClick={handleAddClick} 
        onKeyDown={handleAddPress}
        ></input>
  
      </div>
    </div>
  );
}

export default AddResource;