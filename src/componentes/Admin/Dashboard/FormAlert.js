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
import { Typography } from "@mui/material";
import FormCostum from "./FormCostum";


export default function FormDialog(props) {

  const [open, setOpen] = React.useState(false);//variable de abrir y cerrar modal

  const handler_ClickOpen = () => {//abre el modal
    setOpen(true);
  };

  const handler_Close = () => {//cierra el modal
    setOpen(false);
  };

  const [isValidName, setValidedName] = useState(true); 
  const [isValidEmail, setValidedEmail] = useState(true);

  const [enteredName, setEnteredName] = useState(props.data.nombre);
  const [enteredEmail, setEnteredEmail] = useState(props.data.email);
  const [enteredPass, setEnteredPass] = useState(props.data.pass);
  const [enteredArea, setEnteredArea] = useState(props.data.area);
  const [enteredEntidad, setEnteredEntidad] = useState(props.data.entidad);
  const [enteredPuesto, setEnteredPuesto] = useState(props.data.puesto);
  const [enteredPermission, setEnteredPermission] = useState(props.data.permisos);

  /**Al cambiar el campo de correo guarda lo ingresado en la variable correspondiente*/

  const onChangeName = (event) =>{

    //valida si el campo está vacio
    console.log(event.target.value);
    if(event.target.value.trim().length>0){
      setValidedName(true);
    }
    
    setEnteredName(event.target.value)
  
  }
  /**Al cambiar el campo de correo guarda lo ingresado en la variable correspondiente*/
  const onChangeFormValue = (event) =>{

    //valida si el campo está vacio
    if(event.target.id=='email'){
      if(event.target.value.trim().length>0){
        setValidedEmail(true);
      }
      setEnteredEmail(event.target.value)
  }
  if(event.target.id=='name'){
    if(event.target.value.trim().length>0){
      setValidedName(true);
    }
    setEnteredName(event.target.value)
}

  }
  /**Al cambiar el campo de correo guarda lo ingresado en la variable correspondiente*/
  const onChangeArea = (event) =>{
    setEnteredArea(event.target.value)
  }
  /**Al cambiar el campo de correo guarda lo ingresado en la variable correspondiente*/
  const onChangeEntidad = (event) =>{
    
    setEnteredEntidad(event.target.value)
  }
  /**Al cambiar el campo de correo guarda lo ingresado en la variable correspondiente*/
  const onChangePuesto = (event) =>{
    
    setEnteredPuesto(event.target.value)

  }
  /**Al cambiar el campo de correo guarda lo ingresado en la variable correspondiente*/
  const onChangePermission = (event) =>{
    
    setEnteredPermission(event.target.value)
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
    if(enteredName.trim().length===0){
      setValidedName(false)
    }
    else if(enteredEmail.trim().length===0){
      setValidedEmail(false)
    }
    
    else{
      props.onUpdateUser(informacionPersonal);
      setOpen(false);

    }
}

const formData = [ //variable de configuración para FormCostum
  {
      id:Math.random(), 
      fieldName: 'name', 
      type: 'text',  
      label: 'Nombre', 
      multiple: false, 
      onBlur : onChangeFormValue, 
      isValid: isValidName, 
      enteredValue:enteredName,
  },
  {
    id:Math.random(),
    fieldName: 'email',
    type: 'text', 
    label: 'Email', 
    multiple: false, 
    onBlur: onChangeFormValue, 
    isValid: isValidEmail, 
    enteredValue:enteredEmail,


  },
  {
    id:Math.random(),
    fieldName: 'area', 
    type: 'select',  
    label: 'Área', 
    onChange:onChangeArea, 
    enteredValue:enteredArea, 
    multiple: true, 
    items: [{ value: 'Dirección de Tecnologías y Plataformas', text: 'Dirección de Tecnologías y Plataformas' },
            {value: 'Coordinación Administrativa',text:'Coordinación Administrativa'},
            {value: 'Órgano Interno de Control',text:'Órgano Interno de Control'}]
  },
  {
    id:Math.random(),
    fieldName: 'entidad',
    type: 'text', 
    label: 'Entidad', 
    multiple: false, 
    enteredValue:enteredEntidad, 
    disabled:true,
    isValid:true
  },
  {
    id:Math.random(),
    fieldName: 'puesto', 
    type: 'select',  
    label: 'Puesto', 
    onChange:onChangePuesto, 
    enteredValue:enteredPuesto, 
    multiple: true, 
    items: [{ value: 'Desarrollador', text: 'Desarrollador' },
            {value: 'Subdirector',text:'Subdirector'},
            {value: 'Director',text:'Director'}]
  },
  {
    id:Math.random(),
    fieldName: 'permission', 
    type: 'select',  
    label: 'Permisos', 
    onChange:onChangePermission, 
    enteredValue:enteredPermission, 
    multiple: true, 
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

          <FormCostum 
          fields={formData}
          defaultValues={props.data}
          
          />
        </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handler_Close}>Cancel</Button>
          <Button onClick={handler_submitUpdateUser}>Guardar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}