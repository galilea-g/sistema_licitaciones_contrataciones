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
import DialogComponent from '../../../UI/Dialog';
import { Link } from "react-router-dom";
import './ormulario.css';


const FormularioBsuquedaParticulares = (props) => {
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

        props.onBuscarParticulares(formularioData);
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
                                    label="NOMBRE ÁRTICULAR"
                                    fullWidth
                                    margin="dense"
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    id="tituloPerticular"
                                    name="tituloPerticular_id"
                                    label="APELLIDO PARTICULAR"
                                    fullWidth
                                    margin="dense"
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <FormControl fullWidth>
                                    <InputLabel id="selectArea_inputLabel">RAZÓN SOCIAL</InputLabel>
                                    <Select
                                        labelId="selectArea_label"
                                        id="selectArea_label_id"
                                        value={area}
                                        label="Area"
                                        onChange={handleChangeSelectBusqueda}
                                    >
                                        <MenuItem value={10}>FÍSICA</MenuItem>
                                        <MenuItem value={20}>MORAL</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    id="tituloPerticular"
                                    name="tituloPerticular_id"
                                    label="RFC"
                                    fullWidth
                                    margin="dense"
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    id="tituloPerticular"
                                    name="tituloPerticular_id"
                                    label="ESTADO"
                                    fullWidth
                                    margin="dense"
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    id="date"
                                    label="FECHA DE REGISTRO"
                                    fullWidth
                                    type="date"
                                    defaultValue="2017-05-24"
                                    sx={{ width: '50%' }}
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                                />
                                
                            </Grid>
                          

                            <Grid className="busqueda-particulares__formulario__actions" item xs={12} sm={12}>

                                <Button type='submit' color='primary' variant='raised'>Buscar</Button>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>

                <Grid className="busqueda-particulares__agregar" item xs={2}>

                    <Link to="/registroparticulares" className="link"><Button type='submit' color='primary' variant='contained'>+</Button></Link>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default FormularioBsuquedaParticulares;