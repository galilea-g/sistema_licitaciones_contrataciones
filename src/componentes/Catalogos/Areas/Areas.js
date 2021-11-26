import React, { useState } from "react";
import { Modal, Button } from "@material-ui/core";
import useStyles from "../Modal/Estilos";
import AreaTabla from "./TablaArea";
import AgregarArea from "./AgregarArea";
import { Link } from "react-router-dom";
import add from './add.png';
import returnimage from './returnimage.png';

{/* 
  Junta el componente de la tabla y del formulario, lo abre en un modal
*/} 
function CatalogoEtapas() {
  
  
  {/* 
  Precargar datos en la tabla de agregararea
*/} 
  const [courseAreas, setCourseAreas] = useState([
    
    {
      id: "cg1",
      textArea: "Seguridad",
      textDescription: "Area 1",
    },
    {
      id: "cg2",
      textArea: "Desarrollo de tecnologías",
      textDescription: "Area 2",
    },
    { id: "cg3", textArea: "Administración", textDescription: "Area 3" },
  ]);

  const handler_addAgregarArea = (AgregarArea) => {
    setCourseAreas((prevCourseAreas) => prevCourseAreas.concat(AgregarArea));
  };

  {/* 
  Carga los estilos para el modal
*/} 
  const styles = useStyles();
{/* 
  Actualiza el modal de inicio a cerrado
*/} 
  const [modal, setModal] = useState(false);
{/* 
  cambia el estado del modal abierto/cerrado
*/} 
  const f_AbrirCerrarModal = () => {
    setModal(!modal);
  };
   {/* 
  body, tiene todo el contenido de la pantalla del la sección area, sin el modal
*/} 
  const body = (
    <div className={styles.modal}>
      
      <br />
      <div align="center">
        <div align="center">
          
          <h2>Nueva Area</h2>
        </div>
        <AgregarArea onAddArea={handler_addAgregarArea} /> 
      </div>
      <br />
      <br />
      <div align="right">
        <Button onClick={() => f_AbrirCerrarModal()}>CERRAR</Button>
      </div>
    </div>
  );

  return (
    <div align="center">
    <div align="left">
    <br />
    <Link to="/catalogos" className="link"><img className={styles.returnimg}  src={returnimage} /></Link>{" "}
    
    </div>
        <AreaTabla areas={courseAreas} />
       

      <Button className={styles.button} onClick={() => f_AbrirCerrarModal()}>
        <img className={styles.addlogo} src={add} />AGREGAR AREA
      </Button>
      <Modal open={modal} onClose={f_AbrirCerrarModal}>
        {body}
      </Modal>
    </div>
  );
}

export default CatalogoEtapas;
