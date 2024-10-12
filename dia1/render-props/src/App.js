// src/App.js
import React from 'react';
import MouseTracker from './MouseTracker';
import ShowCoordinates from './ShowCoordinates';

function App() {
  return (
    <div>
      <h1>Ejemplo de Render Props</h1>
      <MouseTracker />
      <ShowCoordinates />
    </div>
  );
}

export default App;
