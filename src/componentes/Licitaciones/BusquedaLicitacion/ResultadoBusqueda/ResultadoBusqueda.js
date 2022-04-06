import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';

import './ResultadoBusqueda.css';

import Table from '../../../UI/Table/Table';
import ComponentProgress from '../../../UI/ComponentProgress';
import DialogComponent from '../../../UI/Dialog';
import ConsultaLicitacion from '../../ConsultaLicitacion/ConsultaLicitacion';

/**
 * Component which show Table and the interecton between interface and  user
 * 
 * @param {loading_stopFunction} loading_stopFunction Function: Function to stop loader when the component is getting results
 * @param {loading} loading Text: Variable 'state' that handles the spinner
 * @param {module} module Text: Variable 'state' that handles the spinner
 * 
 * @author Galilea Granados <galilea.granados@sesaj.org>
 */
const ResultadoBusqueda = (props) => {
    //Se cambiará este arreglo por un servicio que irá a buscar a la DB
    
    let url = "http://localhost:3001/licitaciones";
    let cm_messageSearchResults = <Typography variant="h3" align="center">SIN RESULTADOS</Typography>;
    const [searchResults, setsearchResults] = useState([]);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [idRowData, setidRowData] = useState(null);

    const tableHeaders = [
        {
            id: 'folio',
            align: 'left',
            numeric: false,
            disablePadding: true,
            label: 'Folio',
        },
        {
            id: 'titulo',
            align: 'left',
            numeric: false,
            disablePadding: true,
            label: 'Titulo',
        },
        {
            id: 'fecha_creacion',
            align: 'left',
            numeric: false,
            disablePadding: true,
            label: 'Fecha creación',
        },
        {
            id: 'fecha_asignacion',
            align: 'left',
            numeric: false,
            disablePadding: true,
            label: 'Fecha asignación',
        },
        {
            id: 'etapa',
            align: 'left',
            numeric: false,
            disablePadding: true,
            label: 'Etapa',
        },
        {
            id: 'partidas',
            align: 'left',
            numeric: true,
            disablePadding: true,
            label: 'Partidas',
        },
    ];

    const tableConfig = {
        title: "Resultado de búsqueda",
        actions: ["see","edit","delete"],
        pagination: false,
        paginationConfig: {
            pageSize: 5
        },
        multiselect: false,
        sort: false
    }
    
    useEffect(() => {
         //Se va a reemplazar por el servicio de obtención de licitaciones
        const identifier = setTimeout(
            function() {
                setsearchResults([
                    {id: 1,folio: Math.random(),titulo: "Titulo de la licitacion 1", fecha_creacion: "01/01/2021", fecha_asignacion:"31/12/2021", etapa:"Etapa 1",partidas:2},
                    {id: 2,folio: Math.random(), titulo:"Titulo de la licitacion 2", fecha_creacion: "01/01/2021", fecha_asignacion: "31/12/2021", etapa:"Etapa 2",partidas:3},
                    {id: 3,folio: Math.random(), titulo:"Titulo de la licitacion 3", fecha_creacion: "01/01/2021", fecha_asignacion: "31/12/2021", etapa:"Etapa 3",partidas:4},
                    {id: 4,folio: Math.random(), titulo:"Titulo de la licitacion 4", fecha_creacion: "01/01/2021", fecha_asignacion: "31/12/2021", etapa:"Etapa 4",partidas:1},
                    {id: 5,folio: Math.random(), titulo:"Titulo de la licitacion 5", fecha_creacion: "01/01/2021", fecha_asignacion: "31/12/2021", etapa:"Etapa 5",partidas:6},
                    {id: 6,folio: Math.random(), titulo:"Titulo de la licitacion 6", fecha_creacion: "01/01/2021", fecha_asignacion: "31/12/2021", etapa:"Etapa 6",partidas:1},
                    {id: 7,folio: Math.random(), titulo:"Titulo de la licitacion 7", fecha_creacion: "01/01/2021", fecha_asignacion: "31/12/2021", etapa:"Etapa 7",partidas:2},
                    {id: 8,folio: Math.random(), titulo:"Titulo de la licitacion 8", fecha_creacion: "01/01/2021", fecha_asignacion: "31/12/2021", etapa:"Etapa 8",partidas:3},
                    {id: 9,folio: Math.random(), titulo:"Titulo de la licitacion 9", fecha_creacion: "01/01/2021", fecha_asignacion: "31/12/2021", etapa:"Etapa 9",partidas:2},
                    {id:10,folio: Math.random(), titulo:"Titulo de la licitacion 10",fecha_creacion: "01/01/2021",fecha_asignacion: "31/12/2021", etapa:"Etapa 10",partidas:1},
                    {id:11,folio: Math.random(), titulo:"Titulo de la licitacion 11",fecha_creacion: "01/01/2021",fecha_asignacion: "31/12/2021", etapa:"Etapa 11",partidas:2},
                    {id:12,folio: Math.random(), titulo:"Titulo de la licitacion 12",fecha_creacion: "01/01/2021",fecha_asignacion:  "31/12/2021", etapa:"Etapa 12",partidas:3},
                    {id:13,folio: Math.random(), titulo:"Titulo de la licitacion 13",fecha_creacion: "01/01/2021",fecha_asignacion:  "31/12/2021", etapa:"Etapa 13",partidas:2}
                ]);
                props.loading_stopFunction()                
            }
        .bind(this), 5000);

        return () => {
            //Ejecuta función padre para cambiar el state del loading
            clearTimeout(identifier);
          };
    }, [props.loading]);
    

    if(props.loading){
        cm_messageSearchResults = <ComponentProgress type="line"/>;
    }

    const f_getDataRow = (idRow) => {
        //Función para buscar por id el registro
        setDialogOpen(true);
        setidRowData(idRow);
    }

    const f_closeDialog = () => {
        setDialogOpen(false);
        setidRowData(null);
    }

    const configDialog = {
        openDialog:dialogOpen,
        fCloseModal: f_closeDialog,
        title: "Resumen de la licitación"
    }

    return <div className="registros-licitacion">
        <DialogComponent {...configDialog} >
            <ConsultaLicitacion
                idData={idRowData}
            />
        </DialogComponent>
        {props.loading || (searchResults.length === 0 &&  !props.loading) ? 
            cm_messageSearchResults : 
            <Table 
                headers={tableHeaders} 
                records={searchResults}
                moduleName={props.module}
                config={tableConfig}
                fGetDataRow={f_getDataRow}
            />
        }
    </div>;
};

export default ResultadoBusqueda;