// Toggle.js - Render Props aplicado
import React, { useState } from 'react';

function Toggle({ render }) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      {render(isVisible, toggleVisibility)}
    </div>
  );
}

export default Toggle;