import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";


  /** 
  Funciones para agregar Etapa
*/

const AgregarEtapa = (props) => {
  const [enteredTextEtapa, setEnteredTextEtapa] = useState("");
  const [enteredTextDescription, setEnteredTextDescription] = useState("");

  const handler_AddEtapa = (event) => {
    event.preventDefault();

    const agregarEtapa = {
      id: Math.random().toString(),
      textEtapa: enteredTextEtapa,
      textDescription: enteredTextDescription,
    };

    setEnteredTextEtapa("");
    setEnteredTextDescription("");

    props.onAddEtapa(agregarEtapa);
  };

  const handler_EtapaTextChange = (event) => {
    setEnteredTextEtapa(event.target.value);
  };
  const handler_DescriptionTextChange = (event) => {
    setEnteredTextDescription(event.target.value);
  };

  return (
    <form onSubmit={handler_AddEtapa}>
      <TextField
        label="Nombre de Etapa"
        value={enteredTextEtapa}
        onChange={handler_EtapaTextChange}
      />
      <br />

      <TextField
        label="Descripción"
        value={enteredTextDescription}
        onChange={handler_DescriptionTextChange}
      />
      <br />
      <Button color="primary" type="submit" >
        Agregar Etapa
      </Button>
    </form>
  );
};

export default AgregarEtapa;
