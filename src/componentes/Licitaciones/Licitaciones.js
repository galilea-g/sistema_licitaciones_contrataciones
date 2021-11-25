import React from 'react';

import BusquedaLicitaciones from './BusquedaLicitacion/BusquedaLicitacion';
import './Licitaciones.css';


const Licitaciones = () => {
    return (
        <div>
            <div className="licitaciones__title">
                <h1>LICITACIONES</h1>
            </div>
            <BusquedaLicitaciones/>
        </div>
    )
}

export default Licitaciones;