import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';

import './ResultadoBusqueda.css';
import Grid from '@mui/material/Grid';

import Table from '../../../UI/Table/Table';
import Spinner from '../../../UI/Spinner';
import DialogComponent from '../../../UI/Dialog';
import ConsultaParticular from '../../ConsultaParticular/ConsultaParticular';

const ResultadoBusqueda = (props) => {
    //Se cambiará este arreglo por un servicio que irá a buscar a la DB
    let cm_mensajeResultadoBusqueda = <Typography variant="h6" align="center">SIN DATOS</Typography>;
    const tableHeaders = [
        {
            id: 'particularNombre',
            align: 'left',
            numeric: false,
            disablePadding: true,
            label: 'Nombre(s)',
        },
        {
            id: 'particularApellidoPaterno',
            align: 'left',
            numeric: false,
            disablePadding: true,
            label: 'Apellido paterno',
        },
        {
            id: 'particularApellidoMaterno',
            align: 'left',
            numeric: false,
            disablePadding: true,
            label: 'Apellido materno',
        },
        
        {
            id: 'particularRFC',
            align: 'left',
            numeric: false,
            disablePadding: true,
            label: 'RFC',
        },
        {
            id: 'particularFechaDeRegistro',
            align: 'left',
            numeric: false,
            disablePadding: true,
            label: 'Fecha de registro',
        },
        {
            id: 'particularFolio',
            align: 'left',
            numeric: true,
            disablePadding: true,
            label: 'Folio',
        },
    ];

    const tableConfig = {
        title: "Resultado de búsqueda particulares",
        actions: ["see"],
        pagination: true,
        paginationConfig: {
            pageSize: 5
        },
        multiselect: false,
        sort: false
    }
    const [resultadosBusqueda, setResultadosBusqueda] = useState([]);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [idRowData, setidRowData] = useState(null);
    
    if(props.loadingData){
        //Se va a reemplazar por el servicio de obtención de particulares
        setTimeout(
            function() {
                setResultadosBusqueda([
                    {id: 1,folio:"Zahir",titulo: "O", fecha_creacion: "G", fecha_asignacion:"OEGZ991020", etapa:"01/01/2021",partidas:Math.random()},
                    {id: 2,folio: "Gali", titulo:" G", fecha_asignacion:"M", fecha_creacion: "JKHS345678", etapa:"01/01/2021",partidas:Math.random()},
                    {id: 3,folio: "Daniel", titulo:"G", fecha_asignacion:"G", fecha_creacion: "KJDG123487", etapa:"01/01/2021",partidas:Math.random()},
                    {id: 4,folio: "Daniel", titulo:"G", fecha_asignacion:"G", fecha_creacion: "JKJL123456", etapa:"01/01/2021",partidas:Math.random()},
                    {id: 5,folio: "Zahir", titulo:"O", fecha_asignacion:"G", fecha_creacion: "KJDG123487", etapa:"01/01/2021",partidas:Math.random()},
                    {id: 6,folio: "Gali", titulo:"G", fecha_asignacion:"M", fecha_creacion: "OPKL097854", etapa:"01/01/2021",partidas:Math.random()},
                    {id: 7,folio: "Zahir", titulo:"O", fecha_asignacion:"G", fecha_creacion: "MERC700239", etapa:"01/01/2021",partidas:Math.random()},
                    {id: 8,folio: "Gali", titulo:"G", fecha_asignacion:"M", fecha_creacion: "KJDG123487", etapa:"01/01/2021",partidas:Math.random()},
                    {id: 9,folio: "Daniel", titulo:"G", fecha_asignacion:"G", fecha_creacion: "KJDG123487", etapa:"01/01/2021",partidas:Math.random()},
                    {id:10,folio: "Daniel", titulo:"gtz",fecha_asignacion: "gtz",fecha_creacion: "OEGZ991020", etapa:"01/01/2021",partidas:Math.random()},
                    {id:11,folio: "Gali", titulo:"g",fecha_asignacion: "m",fecha_creacion: "OEGZ991020", etapa:"01/01/2021",partidas:Math.random()},
                    {id:12,folio: "Daniel", titulo:"j",fecha_asignacion: "n",fecha_creacion:  "AMLO908765", etapa:"01/01/2021",partidas:Math.random()},
                    {id:13,folio: "Zahir", titulo:"ORT",fecha_asignacion: "GTZ",fecha_creacion:  "OEGZ991020", etapa:"01/01/2021",partidas:Math.random()}
                ]);
                //Ejecuta función padre para cambiar el state del loading
                props.onLoadingData()
        }.bind(this), 2000);
    }

    if(props.loadingData){
        cm_mensajeResultadoBusqueda = <Spinner/>;
    }

    const f_getDataRow = (idRow) => {
        setDialogOpen(true);
        setidRowData(idRow);
    }

    const f_closeDialog = () => {
        setDialogOpen(false);
        setidRowData(null);
    }

    const tableHeaders2 = [
        {
            id: 'idC',
            align: 'left',
            numeric: false,
            disablePadding: true,
            label: 'Id',
        },
        {
            id: 'info',
            align: 'left',
            numeric: false,
            disablePadding: true,
            label: 'Info',
        },
        {
            id: 'estatus',
            align: 'left',
            numeric: false,
            disablePadding: true,
            label: 'Estatus',
        }
    ];

    const resultadosBusqueda2 = [
        {id: 1,idC: Math.random(), info: "Titulo de la particular 1", estatus: "01/01/2021"},
        {id: 2,idC: Math.random(), info:"Titulo de la particular 2", estatus:"01/01/2021"},
        {id: 3,idC: Math.random(), info:"Titulo de la particular 3", estatus:"01/01/2021"},
        {id: 4,idC: Math.random(), info:"Titulo de la particular 4", estatus:"01/01/2021"},
        {id: 5,idC: Math.random(), info:"Titulo de la particular 5", estatus:"01/01/2021"},
        {id: 6,idC: Math.random(), info: "Titulo de la particular 1", estatus: "01/01/2021"},
        {id: 7,idC: Math.random(), info:"Titulo de la particular 2", estatus:"01/01/2021"},
        {id: 8,idC: Math.random(), info:"Titulo de la particular 3", estatus:"01/01/2021"},
        {id: 9,idC: Math.random(), info:"Titulo de la particular 4", estatus:"01/01/2021"},
        {id: 10,idC: Math.random(), info:"Titulo de la particular 5", estatus:"01/01/2021"}
    ]

    const configDialog = {
        openDialog:dialogOpen,
        fCloseModal: f_closeDialog,
        title: "Ver datos del particular"
    }

    return <div className="registros-particular">
        <DialogComponent {...configDialog}>
            <ConsultaParticular
                idData={idRowData}
            />
        </DialogComponent>
            <Table 
                headers={tableHeaders} 
                records={resultadosBusqueda}
                nombreModulo={props.modulo}
                config={tableConfig}
                fGetDataRow={f_getDataRow}
            />
       

    </div>;
};

export default ResultadoBusqueda;