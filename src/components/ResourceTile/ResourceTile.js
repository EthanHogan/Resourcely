import React from 'react';
import style from './ResourceTile.module.css';

function ResourceTile( { resource }) {
  return (
    <a className={style.ResourceTile} href={resource.link} target="_blank">
      <div className={style.title}>{resource.title}</div>
      <p className={style.description}>{resource.description}</p>
    </a>
  );
}

export default ResourceTile;