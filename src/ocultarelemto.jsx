import React, { useState } from "react";

function OculatarElemento() {
  const [visible, setVisible] = useState(true);

  const ocultarelemento = () => {
    setVisible(!visible);
  };

  const estilo = {
    background: 'red', 
    width: '120px',
    height: '120px',

    margin: '12px auto',
  }

  
  const estiloBoton = {
    margin: '12px',
  }
  
  return (
    <>
      <button onClick={ocultarelemento} style={estiloBoton}> Ocultar/mostart</button>
      {visible && (
        <div
          style={estilo}
        ></div>
      )}
    </>
  );
}

export default OculatarElemento;
