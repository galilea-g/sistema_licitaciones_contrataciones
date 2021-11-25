import React, { useState } from 'react';

import FormularioBusquedaLicitaciones from './Formulario/Formulario';
import Results from './ResultadoBusqueda/ResultadoBusqueda';

const BusquedaLicitaciones = (props) => {

    const [searchData, setsearchData] = useState({});
    const [Loading, setLoading] = useState(false);

    //Se ejecutará la obtención de datos del hijo formulario
    //Los datos obtenidos se irán al servicio de obtención de datos de la DB
    //Cuando se ejecute el serivicio se mostrará spinner hasta que el servicio regrese resultados
    //Cuando el servicio regrese resultados se cambiará el estado del spinner
    const f_getDataDB = (data) => {
        if(!Loading){
            setLoading(true);
        }
        setsearchData(() => {
            return {...data};
        });
    }

    const f_saveDataForm = (dataSearch) => {
        f_getDataDB(dataSearch);
    }

    const f_quitLoading = () => {
        setLoading(false);
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
                loadingData={Loading}
                onLoadingData={f_quitLoading}
                data_dataSearch={searchData}
            />
        </div>
    );
}

export default BusquedaLicitaciones;