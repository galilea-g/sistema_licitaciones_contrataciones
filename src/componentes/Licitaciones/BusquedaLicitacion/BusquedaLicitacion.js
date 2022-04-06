import React, { useState } from 'react';

import FormularioBusquedaLicitaciones from './Formulario/Formulario';
import Results from './ResultadoBusqueda/ResultadoBusqueda';

/**
 * 
 * Component which displays form and table of results
 * This component controls getting data of form and results as well as the component loader
 * 
 * @author Galilea Granados <galilea.granados@sesaj.org
 * 
 */
const BusquedaLicitaciones = () => {
    const [Loading, setLoading] = useState(true);
    const [searchData, setsearchData] = useState({});

    //Se ejecutará la obtención de datos del hijo formulario
    //Los datos obtenidos se irán al servicio de obtención de datos de la DB
    //Cuando se ejecute el serivicio se mostrará spinner hasta que el servicio regrese resultados
    //Cuando el servicio regrese resultados se cambiará el estado del spinner
    const f_getDataDB = (data) => {
        setLoading(true);
        setsearchData(() => {
            return {...data,"busqueda": true};
        });
    }


    const f_saveDataForm = (dataSearch) => {
        f_getDataDB(dataSearch);
    }

    const f_stopLoading = () => {
        setLoading(false)
    }

    return (
        <div>
            <h6>
                Formulario de búsqueda de las licitaciones existentes en el sistema,
                usuarios con permisos podrán modficar, crear o eliminar licitaciones
            </h6>
            <br/>
            <FormularioBusquedaLicitaciones
                onBuscarLicitaciones={f_saveDataForm}
            />
            <Results
                module="LIC"
                data_dataSearch={searchData}
                loading={Loading}
                loading_stopFunction={f_stopLoading}
            />
        </div>
    );
}

export default BusquedaLicitaciones;