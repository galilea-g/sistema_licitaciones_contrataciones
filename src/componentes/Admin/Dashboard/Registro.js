import { useState } from "react";
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography,Grid } from "@mui/material";
import useInput from "../../../hooks/use-input";
import MultiSelectCustom from "./MultiSelectCustom";


/**
 *  27-01-2022
 * Daniel Gutiérrez
 * @param {title='', data='' onUpdateUser} props El único que se usa es el onUopdateUser
 * Descripción: Abre un formulario para registro de usuario nuevo, guarda y actualiza la lista de usuarios
 */
export default function FormDialog(props) {


  const [open, setOpen] = React.useState(false);//variable de abrir y cerrar modal

  const handler_ClickOpen = () => {//abre el modal
    setOpen(true);
  };

  const handler_Close = () => {//cierra el modal
    setOpen(false);
  };

  
  //Llama al costum hook useInput y se configura el input nombre
  const { 
    value: enteredName,
    valueIsValid: isValidName,
    hasError: nameHasError,
    onValueChange: onNameChange,
    onValueBlur: onNameBlur,
  } = useInput(value=>value.trim()!=='');  

  //Llama al costum hook useInput y se configura el input nombre
  const { 
    value: enteredEmail,
    valueIsValid: isValidEmail,
    hasError: emailHasError,
    onValueChange: onEmailChange,
    onValueBlur: onEmailBlur,
  } = useInput(value=>value.includes('@')); 
  //Llama al costum hook useInput y se configura el input nombre
  const { 
    value: enteredEntidad,
    valueIsValid: isValidEntidad,
    hasError: entidadHasError,
    onValueChange: onEntidadChange,
    onValueBlur: onEntidadBlur,
  } = useInput(value=>value.trim()!=='');  

  //Llama al costum hook useInput y se configura el input nombre
  const { 
    value: enteredPass,
    valueIsValid: isValidPass,
    hasError: passHasError,
    onValueChange: onChangePass,
    onValueBlur: onBlurPass,
  } = useInput(value=>value.length >= 8);  

  //Llama al costum hook useInput y se configura el input nombre
  const { 
    value: enteredPassConfirm,
    valueIsValid: isValidPassConfirm,
    hasError: passConfirmHasError,
    onValueChange: onChangePassConfirm,
    onValueBlur: onBlurPassConfirm,
  } = useInput(value=>value === enteredPass);  
  let passConfDisabled=true;
  if(enteredPass){
    passConfDisabled=false
  }
  

  const [enteredArea, setEnteredArea] = useState(props.data.area ?props.data.area :'');
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
//Valida si algun campo del formulario es invalido para evitar el submit
  let formHasError = true;
  if(isValidName && isValidEmail && isValidEntidad && isValidPass && isValidPassConfirm){
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
          pass: enteredPass,

    }
    props.onUpdateUser(informacionPersonal);
    handler_Close();
    

}
const formData = [ //variable de configuración para MultiSelectCustom
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
        Agregar usuario
      </Button>
      <Dialog open={open} onClose={handler_Close}>
        <DialogTitle> Agregar usuario</DialogTitle>
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
            id='pass'
            label='Pass' 
            type='password'
            error={passHasError} 
            value={enteredPass }
            fullWidth
            variant="standard"
            onBlur={onBlurPass}
            onChange={onChangePass}

        >
        </TextField>
        {passHasError && <Typography variant="p"  gutterBottom component="div" style={{color:'red'}} > La contraseña debe ser mayor a 8 caracteres </Typography> }
        
        <TextField
            id='passConf'
            label='PassConf' 
            type='password'
            error={passConfirmHasError} 
            value={enteredPassConfirm }
            fullWidth
            variant="standard"
            onBlur={onBlurPassConfirm}
            onChange={onChangePassConfirm}
            disabled={passConfDisabled}

        >
        </TextField>
        {passConfirmHasError && <Typography variant="p"  gutterBottom component="div" style={{color:'red'}} > Las contraseñas no coinciden </Typography> }
        
        <TextField
            id='entidad'
            label='Entidad' 
            type='text'
            error={entidadHasError} 
            value={enteredEntidad }
            fullWidth
            variant="standard"
            onBlur={onEntidadBlur}
            onChange={onEntidadChange}
        >
        {entidadHasError && <Typography variant="p"  gutterBottom component="div" style={{color:'red'}} > Campo no puede estar vacío </Typography> }

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