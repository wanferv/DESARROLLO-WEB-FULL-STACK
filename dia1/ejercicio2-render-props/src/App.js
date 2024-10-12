// src/App.js
import React from 'react';
import ToggleText from './ToggleText';
import ToggleImage from './ToggleImage';

function App() {
  return (
    <div>
      <h1>Ejemplo de Render Props - Mostrar/Ocultar</h1>
      <ToggleText />
      <ToggleImage />
    </div>
  );
}

export default App;