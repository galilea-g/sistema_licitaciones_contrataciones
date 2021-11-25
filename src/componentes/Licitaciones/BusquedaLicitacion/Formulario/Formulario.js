import React, { useState } from 'react';
import {
    Paper,
    Box,
    Grid,
    TextField,
    Typography,
    FormControl,
    FormControlLabel,
    Select,
    MenuItem,
    InputLabel,
    Checkbox,
    Button
  } from '@material-ui/core';

import Stack from '@mui/material/Stack';

import './Formulario.css';

const FormularioBsuquedaLicitaciones = (props) => {
    const [folio, setFolio] = useState('');
    const [titulo, setTitulo] = useState('');
    const [fechaCreacionInicio, setFechaCreacionInicio] = useState('');
    const [fechaCreacionFin, setFechaCreacionFin] = useState('');
    const [area, setArea] = useState('');


    const handler_folio = event => {
        setFolio(event.target.value);
    }

    const handler_titulo = event => {
        setTitulo(event.target.value);
    }

    const handler_fechaInicio = event => {
        setFechaCreacionInicio(event.target.value);
    }

    const handler_fechaFin = event => {
        setFechaCreacionFin(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        
        const formularioData = {
            folio: folio,
            titulo: titulo,
            fechaInicio: new Date(fechaCreacionInicio),
            FechaFin: new Date(fechaCreacionFin)
        }

        props.onBuscarLicitaciones(formularioData);
    }

    const handleChangeSelectBusqueda = (event) => {
        setArea(event.target.value);
      };
    

    return (
        <Paper>
            <Grid container spacing={2}>
                <Grid item xs={10}>
                    <form onSubmit={submitHandler}>
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    id="folio"
                                    name="folio"
                                    label="Folio licitación"
                                    fullWidth
                                    margin="dense"
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    id="tituloLicitacion"
                                    name="tituloLicitacion_id"
                                    label="Titulo de la licitación"
                                    fullWidth
                                    margin="dense"
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <FormControl fullWidth>
                                    <InputLabel id="selectArea_inputLabel">Area</InputLabel>
                                    <Select
                                        labelId="selectArea_label"
                                        id="selectArea_label_id"
                                        value={area}
                                        label="Area"
                                        onChange={handleChangeSelectBusqueda}
                                    >
                                        <MenuItem value={10}>Area 1</MenuItem>
                                        <MenuItem value={20}>Area 2</MenuItem>
                                        <MenuItem value={30}>Area 3</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    id="date"
                                    label="Fecha creación INICIO"
                                    type="date"
                                    defaultValue="2017-05-24"
                                    sx={{ width: '50%' }}
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                                />
                                <TextField
                                    id="date"
                                    label="Fecha creación FIN"
                                    type="date"
                                    defaultValue="2017-05-24"
                                    sx={{ width: '50%' }}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <FormControl fullWidth>
                                    <InputLabel id="selectEtapa_inputLabel">Etapa</InputLabel>
                                    <Select
                                        labelId="selectEtapa_label"
                                        id="selectEtapa_label_id"
                                        value={area}
                                        label="Etapa"
                                        onChange={handleChangeSelectBusqueda}
                                    >
                                        <MenuItem value={10}>Etapa 1</MenuItem>
                                        <MenuItem value={20}>Etapa 2</MenuItem>
                                        <MenuItem value={30}>Etapa 3</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <FormControl fullWidth>
                                    <InputLabel id="selectResponsable_inputLabel">Responsable</InputLabel>
                                    <Select
                                        labelId="selectResponsable_label"
                                        id="selectResponsable_label_id"
                                        value={area}
                                        label="Responsable"
                                        onChange={handleChangeSelectBusqueda}
                                    >
                                        <MenuItem value={10}>Responsable 1</MenuItem>
                                        <MenuItem value={20}>Responsable 2</MenuItem>
                                        <MenuItem value={30}>Responsable 3</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid className="busqueda-licitacion__formulario__actions" item xs={12} sm={12}>
                                <Button type='submit' color='primary' variant='raised'>Buscar</Button>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
                <Grid className="busqueda-licitacion__agregar" item xs={2}>
                    <Button type='submit' color='primary' variant='contained'>+</Button>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default FormularioBsuquedaLicitaciones;