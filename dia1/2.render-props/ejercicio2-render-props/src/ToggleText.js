// ToggleText.js - Usando Render Props
import React from 'react';
import Toggle from './Toggle';

function ToggleText() {
  return (
    <Toggle render={(isVisible, toggleVisibility) => (
      <div>
        <button onClick={toggleVisibility}>
          {isVisible ? 'Ocultar texto' : 'Mostrar texto'}
        </button>
        {isVisible && <p>Este es el texto que se puede ocultar o mostrar.</p>}
      </div>
    )} />
  );
}

export default ToggleText;