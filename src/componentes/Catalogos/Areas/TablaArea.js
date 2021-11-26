import React from "react";
import TableC from "../../UI/Table/Table";
import useStyles from "../Modal/Estilos";
{/* 
  estrucutura de la tabla de areas
*/} 
const AreaTabla = (props) => {

    {/* 
  Carga los estilos para el modal
*/} 
  const styles = useStyles();

const tableHeaders = [
        {
            id: 'area',
            align: 'left',
            numeric: false,
            disablePadding: true,
            label: 'Area',
        },
        {
            id: 'descrpcionArea',
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
      <h2 className={styles.tuclase}>AREAS</h2>
<div>
            <TableC 
            width="90%"
              headers={tableHeaders}
              registros={props.areas}
              config={tableConfig}
            />              
            </div>

    </div>
  );
};

export default AreaTabla;
