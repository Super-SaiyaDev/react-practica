import React, { useState } from "react";

const strengLabel = ["weak", "midum", "strong"];

function login() {
  const [strength, setSrength] = useState("");

  const getStrength = (password: string) => {
    let strngthIndicator = {
      number: -1,
      upper: false,
      lower:false,
      numbers: false
    }
    for (let index = 0; index < password.length; index++) {
      const char = password.charCodeAt(index);
      if (!upper && char >= 65 && char <= 90) {
        upper = true;
        strngthIndicator++;
      }
      if (!numbers && char >= 48 && char <= 57) {
        numbers = true;
        strngthIndicator++;
      }
      if (!lower && char >= 97 && char <= 122) {
        upper = true;
        strngthIndicator++;
      }
    }

    setSrength(strengLabel[strngthIndicator]);
  };

  const handlechange = (event) => getStrength(event.target.value);

  return (
    <>
      <input
        name="password"
        spellCheck="false"
        className="control"
        placeholder="password"
        type="password"
        onChange={handlechange}
      />
      <div className={`bars ${strength}`}>
        <div></div>
      </div>
      <div className="strength">{strength && <>{strength} password</>}</div>v
    </>
  );
}

export default login;
