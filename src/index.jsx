import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Valor() {
  const bool = false;
  const user = {
    lastname: "edelson",
    name: "jaelt",
  };

  const multi = (n1, n2) => {
    return (
      <>
        <table>
          <thead>
            <tr>
              <th>numero 1</th>
              <th>*</th>
              <th>numero 2</th>
              <th>=</th>
              <th>resultado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{n1}</td>
              <td>*</td>
              <td>{n2}</td>
              <td>{n1*n2}</td>
            </tr>
          </tbody>
        </table>
      </>
    );
  };

  return (
    <>
      <div>
        <h1>{bool.toString()}</h1> {/* convirtiendo de bool a string */}
        <h2>
          {/*{JSON.stringify(user)} convirtiendo de odjeto a string */}
          {user.lastname /* accediendo a el odjeto*/}
        </h2>
      </div>

      <div className="multi">
        <h2 className="tabla">tabla</h2>
        <div>{multi(2,12)}</div>
      </div>
    </>
  );
}

root.render(<Valor></Valor>);
