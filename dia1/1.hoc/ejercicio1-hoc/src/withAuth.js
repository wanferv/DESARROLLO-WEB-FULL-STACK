// withAuth.js - HOC para autenticación
import React from 'react';

function withAuth(Component) {
  return function AuthenticatedComponent({ isAuthenticated, ...props }) {
    if (!isAuthenticated) {
      return <p>No tienes acceso a este contenido. Por favor, inicia sesión.</p>;
    }

    return <Component {...props} />;
  };
}

export default withAuth;
