import React, { useState } from 'react';

import FormularioBusquedaParticulares from './Formulario/Formulario';
import ResultadoBusqueda from './ResultadoBusqueda/ResultadoBusqueda';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const BusquedaParticular = (props) => {

    const [busquedaData, setbusquedaData] = useState({});
    const [Loading, setLoading] = useState(false);

    //Se ejecutará la obtención de datos del hijo formulario
    //Los datos obtenidos se irán al servicio de obtención de datos de la DB
    //Cuando se ejecute el serivicio se mostrará spinner hasta que el servicio regrese resultados
    //Cuando el servicio regrese resultados se cambiará el estado del spinner
    const f_getDataDB = (datos) => {
        if(!Loading){
            setLoading(true);
        }
        setbusquedaData(() => {
            return {...datos};
        });
    }

    const f_saveDataForm = (datosBusqueda) => {
        f_getDataDB(datosBusqueda);
    }

    const f_quitLoading = () => {
        setLoading(false);
    }

    return (
        <div>
            <div className="busqueda-particular__titulo">
                <h1>BÚSQUEDA DE PARTICULARES</h1>
            </div>
            
            <div align="center" >
                <FormularioBusquedaParticulares
                    onBuscarParticulares={f_saveDataForm}
                />
                <ResultadoBusqueda 
                    modulo="LIC"
                    loadingData={Loading}
                    onLoadingData={f_quitLoading}
                    data_datosBusqueda={busquedaData}
                />
            </div>
        </div>
    );
}

export default BusquedaParticular;