import React, { useState } from "react";
import { Modal, Button } from "@material-ui/core";
import useStyles from "../Modal/Estilos";
import EtapaTabla from "./TablaEtapa";
import AgregarEtapa from "./AgregarEtapa";
import { Link } from "react-router-dom";
import add from './add.png';
import returnimage from './returnimage.png';

{/* 
  Junta el componente de la tabla y del formulario, lo abre en un modal
*/} 
function CatalogoEtapas() {
  
  
  {/* 
  Precargar datos en la tabla de agregaretapa
*/} 
  const [courseEtapas, setCourseEtapas] = useState([
    
    {
      id: "cg1",
      textEtapa: "Junta aclaraciones",
      textDescription: "Etapa 1",
    },
    {
      id: "cg2",
      textEtapa: "Presentación de propuestas",
      textDescription: "Etapa 2",
    },
    { id: "cg3", textEtapa: "Fallo", textDescription: "Etapa 3" },
  ]);

  const handler_addAgregarEtapa = (AgregarEtapa) => {
    setCourseEtapas((prevCourseEtapas) => prevCourseEtapas.concat(AgregarEtapa));
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
  body, tiene todo el contenido de la pantalla del la sección Etapa, sin el modal
*/} 
  const body = (
    <div className={styles.modal}>
      
      <br />
      <div align="center">
        <div align="center">
          
          <h2>Nueva Etapa</h2>
        </div>
        <AgregarEtapa onAddEtapa={handler_addAgregarEtapa} /> 
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
        <EtapaTabla Etapas={courseEtapas} />
       

      <Button className={styles.button} onClick={() => f_AbrirCerrarModal()}>
        <img className={styles.addlogo} src={add} />AGREGAR Etapa
      </Button>
      <Modal open={modal} onClose={f_AbrirCerrarModal}>
        {body}
      </Modal>
    </div>
  );
}

export default CatalogoEtapas;
