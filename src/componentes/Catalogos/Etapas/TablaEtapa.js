import React from "react";
import TableC from "../../UI/Table/Table";
import useStyles from "../Modal/Estilos";
{/* 
  estrucutura de la tabla de Etapas
*/} 
const EtapaTabla = (props) => {

    {/* 
  Carga los estilos para el modal
*/} 
  const styles = useStyles();

const tableHeaders = [
        {
            id: 'Etapa',
            align: 'left',
            numeric: false,
            disablePadding: true,
            label: 'Etapa',
        },
        {
            id: 'descrpcionEtapa',
            align: 'left',
            numeric: false,
            disablePadding: true,
            label: 'Descripción',
        },
        
    ];



  const tableConfig = {
        title: false,
        actions: ["see"],
        pagination: true,
        paginationConfig: {
            pageSize: 5
        },
        multiselect: false
    }



  return (

    
    <div align="center" >
      <h2 className={styles.tuclase}>ETAPAS</h2>
<div>
            <TableC 
            width="90%"
              headers={tableHeaders}
              records={props.Etapas}
              config={tableConfig}
            />              
            </div>

    </div>
  );
};

export default EtapaTabla;
