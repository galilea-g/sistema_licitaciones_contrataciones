import React, { useState } from "react";
import TableC from "../../UI/Table/Table";
import useStyles from "../Modal/Estilos";
import DialogComponent from "../../UI/Dialog";

//estrucutura de la tabla de Etapas
const EtapaTabla = (props) => {
  //Carga los estilos para el modal

  const styles = useStyles();
  //titulos para la tabla
  const tableHeaders = [
    {
      id: "Etapa",
      align: "left",
      numeric: false,
      disablePadding: true,
      label: "Etapa",
    },
    {
      id: "descrpcionEtapa",
      align: "left",
      numeric: false,
      disablePadding: true,
      label: "Descripción",
    },
  ];
  //configuración para la tabla
  const tableConfig = {
    title: false,
    actions: ["see"],
    pagination: true,
    paginationConfig: {
      pageSize: 5,
    },
    multiselect: false,
  };

  //Inicia el componente dialog cerrado
  const [dialogOpen, setDialogOpen] = useState(false);
  const [idRowData, setidRowData] = useState(null);
  const [folioRowData, setfolioRowData] = useState(null);

  const f_getDataRow = (idRow) => {
    setDialogOpen(true);
    setidRowData(idRow);
    //prueba en proceso
    setfolioRowData(idRow);
  };
  //cierra el dialog y establece
  const f_closeDialog = () => {
    setDialogOpen(false);
    setidRowData(null);
  };
  //contenido de dialog
  const f_contenidoDialogVer = (
    <div>
      <>
        <label className="labelLlave"> ETAPA: </label>
        <label className="labelValue"> Junta de aclaraciones</label>
        <br></br>
        <label className="labelLlave"> ETAPA: </label>
        <label className="labelValue"> Etapa 1</label>
      </>
    </div>
  );

  return (
    <div align="center">
      <h2 className={styles.tuclase}>ETAPAS</h2>
      <div>
        <DialogComponent
          openDialog={dialogOpen}
          closeModal={f_closeDialog}
          title="Resumen de consulta"
        >
          {f_contenidoDialogVer}
        </DialogComponent>
        <TableC
          width="90%"
          headers={tableHeaders}
          records={props.Etapas}
          config={tableConfig}
          fGetDataRow={f_getDataRow}
        />
      </div>
    </div>
  );
};

export default EtapaTabla;
