// ToggleImage.js - Usando Render Props
import React from 'react';
import Toggle from './Toggle';

function ToggleImage() {
  return (
    <Toggle render={(isVisible, toggleVisibility) => (
      <div>
        <button onClick={toggleVisibility}>
          {isVisible ? 'Ocultar imagen' : 'Mostrar imagen'}
        </button>
        {isVisible && <img src="http://www.futbolyasociados.com/wp-content/uploads/2016/10/milan-1990.jpg" alt="Ejemplo" />}
      </div>
    )} />
  );
}

export default ToggleImage;