import React, { useState } from "react";

function ListandoTareas() {
  const [tarea, setTarea] = useState("");
  const [tareas, SetTareas] = useState(["Matematicas", "Examen", "Fregar"]);

  const addTarea = () => {
    SetTareas([...tareas, 'tarea']);
  };

  const mostrarTarea = (evento) => {
    setTarea(evento.target.value);
  };

  return (
    <>
      <div className="container">
        <h1> Tareas </h1>

        <form action="">
          <div className="input">
            <label htmlFor="Tarea">LIsta de Tareas</label>
            <input type="text" value={tarea} onChange={mostrarTarea}/>
            <label htmlFor="">{tarea} </label>
            <button onClick={addTarea}>enviar</button>
          </div>

          <div className="list-menssage">
            <select>
              {tareas.map((opcion, index) => (
                <option key={index}>{opcion}</option>
              ))}
            </select>

            {/*             <select name="tareas" id="tare">
              {opciones.map((opcion, index) => {
                <option key={index}>{opcion}</option>
              })}
            </select> */}
          </div>
        </form>
      </div>
    </>
  );
}

export default ListandoTareas;

/* 

let listBox = document.getElementById("miListBox");

var opcion = document.createElement("option");
opcion.text = "Nueva Opción";
opcion.value = "nuevaOpcion";


listBox.add(opcion);  */
