import React from "react";
import CatalogoEtapas from "./Areas/Areas";
import { Modal, Button } from "@material-ui/core";
import AreaTabla from "./Areas/TablaArea";
import useStyles from "./Modal/Estilos";
import { Link } from "react-router-dom";
import InputAdornments from "../Particulares/Registro_particulares";
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
      <Link to="/etapas" className="link"><Button className={styles.button}>Etapas</Button></Link>
      <br></br>
      <Link to="/particulares" className="link"><Button className={styles.button}>Particulares</Button></Link>
      <br></br>
      <Link to="/etapas" className="link"><Button className={styles.button}>SERVIDRES</Button></Link>
      <br></br>
    
    </div>
  );
}

export default Catalogos;