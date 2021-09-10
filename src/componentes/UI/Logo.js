import React from 'react';

import sistemaLogo from '../../assets/imagenes/logo.png';
import './styles.css';

const logo = (props) => (
    <div className="Logo" style={{height: props.height}} >
        <img src={sistemaLogo} alt="Sesaj"/>
    </div>
);

export default logo;