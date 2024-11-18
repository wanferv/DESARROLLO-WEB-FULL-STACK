// ProfilePage.js - DESPUÉS de implementar HOC
import React from 'react';
import withAuth from './withAuth';

function ProfilePage() {
  return (
    <div>
      <h1>Página de Perfil</h1>
      <p>Bienvenido a tu perfil.</p>
    </div>
  );
}

export default withAuth(ProfilePage);
