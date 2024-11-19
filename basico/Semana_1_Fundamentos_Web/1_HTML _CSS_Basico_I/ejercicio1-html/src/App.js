// App.js
import React from "react";

function App() {
  const handleRedirect = () => {
    window.location.href = `${process.env.PUBLIC_URL}/form.html`;
  };

  return (
    <div>
      <h1>Bienvenido a la aplicación</h1>
      <button onClick={handleRedirect}>Ir al formulario</button>
    </div>
  );
}

export default App;
 