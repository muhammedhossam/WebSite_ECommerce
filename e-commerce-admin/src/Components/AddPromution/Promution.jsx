import React, { useState } from "react";

import "./Promution.css";
function Promution() {
  const [promutionDetails, setPromutionDetails] = useState({
    code: "",
    value: "0",
  });

  const Add_promution = async () => {
    console.log(promutionDetails);
    let promution = promutionDetails;

    await fetch("http://localhost:4000/addpromution", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(promution),
    })
      .then((resp) => resp.json())
      .then((data) => {
        data.success ? alert("Promution Added") : alert("Failed");
      });
  };

  const changeHandler = (e) => {
    console.log(e);
    setPromutionDetails({
      ...promutionDetails,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="add-promution">
      <div className="promotion-itemfield">
        <p>Promution Code</p>
        <input
          value={promutionDetails.code}
          onChange={changeHandler}
          type="Number"
          name="code"
          placeholder="Type here"
        />
      </div>
      <div className="promotion-itemfield">
        <p>Promution Value</p>
        <input
          value={promutionDetails.value}
          onChange={changeHandler}
          type="Number"
          name="value"
          placeholder="Type here"
        />
      </div>
      <button
        onClick={() => {
          Add_promution();
        }}
        className="addpromution-btn"
      >
        ADD
      </button>
    </div>
  );
}

export default Promution;
