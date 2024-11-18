// src/ShowCoordinates.js
import React from 'react';
import Mouse from './Mouse';

function ShowCoordinates() {
  return (
    <Mouse render={(position) => (
      <p>Coordenadas actuales: {position.x}, {position.y}</p>
    )} />
  );
}

export default ShowCoordinates;
