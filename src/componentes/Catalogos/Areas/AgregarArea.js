import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";


  /** 
  Funciones para agregar area
*/

const AgregarArea = (props) => {
  const [enteredTextArea, setEnteredTextArea] = useState("");
  const [enteredTextDescription, setEnteredTextDescription] = useState("");

  const handler_AddArea = (event) => {
    event.preventDefault();

    const agregarArea = {
      id: Math.random().toString(),
      textArea: enteredTextArea,
      textDescription: enteredTextDescription,
    };

    setEnteredTextArea("");
    setEnteredTextDescription("");

    props.onAddArea(agregarArea);
  };

  const handler_AreaTextChange = (event) => {
    setEnteredTextArea(event.target.value);
  };
  const handler_DescriptionTextChange = (event) => {
    setEnteredTextDescription(event.target.value);
  };

  return (
    <form onSubmit={handler_AddArea}>
      <TextField
        label="Nombre de area"
        value={enteredTextArea}
        onChange={handler_AreaTextChange}
      />
      <br />

      <TextField
        label="Descripción"
        value={enteredTextDescription}
        onChange={handler_DescriptionTextChange}
      />
      <br />
      <Button color="primary" type="submit" >
        Agregar Area
      </Button>
    </form>
  );
};

export default AgregarArea;
