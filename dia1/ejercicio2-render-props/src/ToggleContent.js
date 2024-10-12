// ToggleContent.js - ANTES de Render Props
import React, { useState } from 'react';

function ToggleContent() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Ocultar contenido' : 'Mostrar contenido'}
      </button>
      {isVisible && <p>Este es el contenido que se muestra o se oculta.</p>}
    </div>
  );
}

export default ToggleContent;