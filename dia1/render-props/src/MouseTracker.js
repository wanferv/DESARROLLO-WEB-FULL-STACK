// src/MouseTracker.js
import React from 'react';
import Mouse from './Mouse';

function MouseTracker() {
  return (
    <Mouse render={(position) => (
      <>
        <h1>Rastreo del mouse</h1>
        <p>Posición del mouse: ({position.x}, {position.y})</p>
      </>
    )} />
  );
}

export default MouseTracker;
