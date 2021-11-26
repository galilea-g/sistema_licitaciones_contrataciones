import React from "react";
import CatalogoEtapas from "./Areas/Areas";
import { Modal, Button } from "@material-ui/core";
import AreaTabla from "./Areas/TablaArea";
import useStyles from "./Modal/Estilos";
import { Link } from "react-router-dom";
function Catalogos() {
     {/* 
  Carga los estilos para el modal
*/} 
  const styles = useStyles();

  return (
    <div align="center">
      <br />
      <h1 className={styles.tuclase}>Catalogos</h1>
      <Link to="/areas" className="link"><Button className={styles.button}>Areas</Button></Link>
      <br />
      <Button className={styles.button}>
        Etapas
      </Button>
      <br></br>
      
    </div>
  );
}

export default Catalogos;