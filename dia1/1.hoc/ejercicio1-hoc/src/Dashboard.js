// Dashboard.js - DESPUÉS de implementar HOC
import React from 'react';
import withAuth from './withAuth';

function Dashboard() {
  return (
    <div>
      <h1>Panel de Control</h1>
      <p>Estás viendo el panel de control.</p>
    </div>
  );
}

export default withAuth(Dashboard);
