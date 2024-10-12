// src/Mouse.js
import React, { useState } from 'react';

function Mouse({ render }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div onMouseMove={handleMouseMove} style={{ height: '100vh', border: '1px solid black' }}>
      {render(position)}
    </div>
  );
}

export default Mouse;
