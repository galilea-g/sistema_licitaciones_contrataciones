import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';

import './ResultadoBusqueda.css';
import Grid from '@mui/material/Grid';

import Table from '../../../UI/Table/Table';
import Spinner from '../../../UI/Spinner';
import DialogComponent from '../../../UI/Dialog';
import ConsultaLicitacion from '../../ConsultaLicitacion/ConsultaLicitacion';

const ResultadoBusqueda = (props) => {
    //Se cambiará este arreglo por un servicio que irá a buscar a la DB
    let cm_messageSearchResults = <Typography variant="h3" align="center">SIN RESULTADOS</Typography>;
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
        actions: ["see"],
        pagination: false,
        paginationConfig: {
            pageSize: 5
        },
        multiselect: false,
        sort: false
    }
    const [searchResults, setsearchResults] = useState([]);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [idRowData, setidRowData] = useState(null);
    
    if(props.loadingData){
        //Se va a reemplazar por el servicio de obtención de licitaciones
        setTimeout(
            function() {
                setsearchResults([
                    {id: 1,folio: Math.random(),titulo: "Titulo de la licitacion 1", fecha_creacion: "01/01/2021", fecha_asignacion:"31/12/2021", etapa:"Etapa 1",partidas:2},
                    {id: 2,folio: Math.random(), titulo:"Titulo de la licitacion 2", fecha_asignacion:"01/01/2021", fecha_creacion: "31/12/2021", etapa:"Etapa 2",partidas:3},
                    {id: 3,folio: Math.random(), titulo:"Titulo de la licitacion 3", fecha_asignacion:"01/01/2021", fecha_creacion: "31/12/2021", etapa:"Etapa 3",partidas:4},
                    {id: 4,folio: Math.random(), titulo:"Titulo de la licitacion 4", fecha_asignacion:"01/01/2021", fecha_creacion: "31/12/2021", etapa:"Etapa 4",partidas:1},
                    {id: 5,folio: Math.random(), titulo:"Titulo de la licitacion 5", fecha_asignacion:"01/01/2021", fecha_creacion: "31/12/2021", etapa:"Etapa 5",partidas:6},
                    {id: 6,folio: Math.random(), titulo:"Titulo de la licitacion 6", fecha_asignacion:"01/01/2021", fecha_creacion: "31/12/2021", etapa:"Etapa 6",partidas:1},
                    {id: 7,folio: Math.random(), titulo:"Titulo de la licitacion 7", fecha_asignacion:"01/01/2021", fecha_creacion: "31/12/2021", etapa:"Etapa 7",partidas:2},
                    {id: 8,folio: Math.random(), titulo:"Titulo de la licitacion 8", fecha_asignacion:"01/01/2021", fecha_creacion: "31/12/2021", etapa:"Etapa 8",partidas:3},
                    {id: 9,folio: Math.random(), titulo:"Titulo de la licitacion 9", fecha_asignacion:"01/01/2021", fecha_creacion: "31/12/2021", etapa:"Etapa 9",partidas:2},
                    {id:10,folio: Math.random(), titulo:"Titulo de la licitacion 10",fecha_asignacion: "01/01/2021",fecha_creacion: "31/12/2021", etapa:"Etapa 10",partidas:1},
                    {id:11,folio: Math.random(), titulo:"Titulo de la licitacion 11",fecha_asignacion: "01/01/2021",fecha_creacion: "31/12/2021", etapa:"Etapa 11",partidas:2},
                    {id:12,folio: Math.random(), titulo:"Titulo de la licitacion 12",fecha_asignacion: "01/01/2021",fecha_creacion:  "31/12/2021", etapa:"Etapa 12",partidas:3},
                    {id:13,folio: Math.random(), titulo:"Titulo de la licitacion 13",fecha_asignacion: "01/01/2021",fecha_creacion:  "31/12/2021", etapa:"Etapa 13",partidas:2}
                ]);
                //Ejecuta función padre para cambiar el state del loading
                props.onLoadingData()
        }.bind(this), 2000);
    }

    if(props.loadingData){
        cm_messageSearchResults = <Spinner/>;
    }

    const f_getDataRow = (idRow) => {
        setDialogOpen(true);
        setidRowData(idRow);
    }

    const f_closeDialog = () => {
        setDialogOpen(false);
        setidRowData(null);
    }

    return <div className="registros-licitacion">
        <DialogComponent
            openDialog={dialogOpen}
            closeModal={f_closeDialog}
            title="Resumen de la licitación"
        >
            <ConsultaLicitacion
                idData={idRowData}
            />
        </DialogComponent>
        {Object.keys(props.data_dataSearch).length === 0 || props.loadingData ? 
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