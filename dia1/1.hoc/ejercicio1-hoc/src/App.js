// src/App.js
import React, { useState } from 'react';
import ProfilePage from './ProfilePage';
import Dashboard from './Dashboard';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div>
      <h1>Ejemplo de Higher-Order Components (HOC)</h1>
      <button onClick={() => setIsAuthenticated(!isAuthenticated)}>
        {isAuthenticated ? 'Cerrar sesión' : 'Iniciar sesión'}
      </button>

      <ProfilePage isAuthenticated={isAuthenticated} />
      <Dashboard isAuthenticated={isAuthenticated} />
    </div>
  );
}

export default App;
