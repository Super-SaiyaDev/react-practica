import React, { useState } from "react";

function CambiarColor() {
  const [colorFondo, setColorFondo] = useState("white"); // Color de fondo inicial

  const cambiarColor = () => {
    setColorFondo("blue"); // Cambiar a color azul al hacer clic
  };

  const cambiarviejo = () => {
    setColorFondo("red"); // Cambiar a color azul al hacer clic
  };
  const stilos = {
    width: "100px",
    height: "100px",
    margin: "12px auto",
    display: "flex",
    backgroundColor: colorFondo,
  };

  return (
    <div>
      <button onClick={cambiarColor}>Cambiar color</button>
      <button onClick={cambiarviejo}>Regresar color</button>
      <div style={stilos}></div>
    </div>
  );
}

export default CambiarColor;
