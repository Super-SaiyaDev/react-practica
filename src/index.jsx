import React from "react";
import ReactDOM from "react-dom/client";
import CambiarColor from "./cambiarcolor";
import OculatarElemento from "./ocultarelemto";
import ListandoTareas from './lista-tareas'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <OculatarElemento />
    <CambiarColor />
    <ListandoTareas></ListandoTareas>
  </>
);
