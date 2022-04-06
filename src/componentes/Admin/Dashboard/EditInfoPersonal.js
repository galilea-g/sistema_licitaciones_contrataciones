import { useState } from "react";
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Typography,Grid } from "@mui/material";
import useInput from "../../../hooks/use-input";
import userEvent from "@testing-library/user-event";
import MultiSelectCustom from "./MultiSelectCustom";

/**
 *  
 * 27-01-2022
 * Daniel Gutiérrez
 * @param {onUpdateUser, title='', data: users = {}} props 
 * Descripción: Recibe la información del usuario, se coloca en un formulario donde puede ser editada y guardada
 *
 */

export default function FormDialog(props) {


  const [open, setOpen] = React.useState(false);//variable de abrir y cerrar modal

  const handler_ClickOpen = () => {//abre el modal
    setOpen(true);
  };

  const handler_Close = () => {//cierra el modal
    setOpen(false);
  };

  

  const { 
    value: enteredName,
    valueIsValid: isValidName,
    hasError: nameHasError,
    onValueChange: onNameChange,
    onValueBlur: onNameBlur,
  } = useInput(value=>value.trim()!=='', props.data.nombre ?  props.data.nombre : '');  

  const { 
    value: enteredEmail,
    valueIsValid: isValidEmail,
    hasError: emailHasError,
    onValueChange: onEmailChange,
    onValueBlur: onEmailBlur,
  } = useInput(value=>value.includes('@'), props.data.email? props.data.email :''); 
  const [enteredArea, setEnteredArea] = useState(props.data.area ?props.data.area :'');
  const [enteredEntidad, setEnteredEntidad] = useState(props.data.entidad ? props.data.entidad : '');
  const [enteredPuesto, setEnteredPuesto] = useState(props.data.puesto ? props.data.puesto : '');
  const [enteredPermission, setEnteredPermission] = useState(props.data.permisos ? props.data.permisos :'');
  
  /**Al cambiar el campo de correo guarda lo ingresado en la variable correspondiente*/
  const onChangeArea = (event) =>{
    setEnteredArea(event.target.value)
  }

  /**Al cambiar el campo de correo guarda lo ingresado en la variable correspondiente*/
  const onChangePuesto = (event) =>{
    
    setEnteredPuesto(event.target.value)

  }
  /**Al cambiar el campo de correo guarda lo ingresado en la variable correspondiente*/
  const onChangePermission = (event) =>{
    
    setEnteredPermission(event.target.value)
  }

  let formHasError = true;
  if(isValidName && isValidEmail){
    formHasError = false;
  }

    /** 
      función handler_submitUpdateUser
      Guarda toda la información ingresada en un arreglo 
      Valida si el nombre y correo tienen valores
      Llama la función onUpdateUser ubicada en Dashboard con la información personal como parámetro
    */
  const handler_submitUpdateUser = (event) => {
    event.preventDefault();
    
    const informacionPersonal = {
          nombre: enteredName,
          area: enteredArea,
          entidad: enteredEntidad,
          puesto: enteredPuesto,
          permisos: enteredPermission,
          email: enteredEmail,
          pass: props.data.pass,

    }
    props.onUpdateUser(informacionPersonal);
    handler_Close();
    

}
const formData = [ //variable de configuración para MultiSelectCostum
  {
  
    fieldName: 'area', 
    label: 'Área', 
    onChange:onChangeArea, 
    enteredValue:enteredArea, 
    items: [{ value: 'Dirección de Tecnologías y Plataformas', text: 'Dirección de Tecnologías y Plataformas' },
            {value: 'Coordinación Administrativa',text:'Coordinación Administrativa'},
            {value: 'Órgano Interno de Control',text:'Órgano Interno de Control'}]
  },
  {

    fieldName: 'puesto', 
    label: 'Puesto', 
    onChange:onChangePuesto, 
    enteredValue:enteredPuesto, 
    items: [{ value: 'Desarrollador', text: 'Desarrollador' },
            {value: 'Subdirector',text:'Subdirector'},
            {value: 'Director',text:'Director'}]
  },
  {

    fieldName: 'permission', 
    label: 'Permisos', 
    onChange:onChangePermission, 
    enteredValue:enteredPermission, 
    items: [{ value: 'Administrador', text: 'Administrador' },
            {value: 'Usuario',text:'Usuario'}]
  }

]

  return (
    <div>
      <Button variant="outlined" onClick={handler_ClickOpen}>
        Editar
      </Button>
      <Dialog open={open} onClose={handler_Close}>
        <DialogTitle>Editar</DialogTitle>
        <DialogContent>
        <form>

        <TextField
            id='nombre'
            label='Nombre' 
            type='text'
            error={nameHasError} 
            value={enteredName}
            fullWidth
            variant="standard"
            onBlur={onNameBlur}
            onChange={onNameChange}
        >
        </TextField>
        {nameHasError && <Typography variant="p" gutterBottom component="div" style={{color:'red'}} > Favor de ingresar un valor. </Typography> }

            <TextField
            id='email'
            label='Email' 
            type='text'
            error={emailHasError} 
            value={enteredEmail }
            fullWidth
            variant="standard"
            onBlur={onEmailBlur}
            onChange={onEmailChange}

        >
        </TextField>
        {emailHasError && <Typography variant="p"  gutterBottom component="div" style={{color:'red'}} > Ingrese un correo válido </Typography> }
        <TextField
            id='entidad'
            label='Entidad' 
            type='text'
            fullWidth
            variant="standard"
            disabled
            value={enteredEntidad}
        >
        </TextField>
            <MultiSelectCustom 
          fields={formData}
          
          />
        </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handler_Close}>Cancel</Button>
          <Button disabled={formHasError}  onClick={handler_submitUpdateUser}>Guardar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}