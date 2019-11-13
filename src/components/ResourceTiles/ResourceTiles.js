import React from 'react';
import './ResourceTiles.css';
import ResourceTile from '../ResourceTile/ResourceTile.js'

function ResourceTiles({ resources }) {
  return (
    <div className="ResourceTiles">
      {resources.map((resource) => {
        return <ResourceTile key={resource.title} resource={resource}/>
      })}
    </div>
  );
}

export default ResourceTiles;