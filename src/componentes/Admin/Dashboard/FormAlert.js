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
    if(event.target.value.trim().length>0){
      setValidedName(true);
    }
    setEnteredName(event.target.value)
  }
  /**Al cambiar el campo de correo guarda lo ingresado en la variable correspondiente*/
  const onChangeEmail = (event) =>{
    //valida si el campo está vacio
    if(event.target.value.trim().length>0){
      setValidedEmail(true);
    }
    setEnteredEmail(event.target.value)
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
            autoFocus
            margin="dense"
            id="nombre"
            label="Nombre"
            type="text"
            fullWidth
            variant="standard"
            onChange={onChangeName}
            value={enteredName}
            error={!isValidName} 
            

          />
          {!isValidName ? 
          <Typography
            variant="p"
            gutterBottom
            component="div"
            style={{color:'red'}}
            
          >
              Favor de ingresar un valor.
          </Typography> : ''}

          <TextField
            autoFocus
            margin="dense"
            id="correo"
            label="Correo"
            type="text"
            fullWidth
            variant="standard"
            onChange={onChangeEmail}
            value={enteredEmail}
            error={!isValidEmail} 
            

          />
          {!isValidEmail ? 
          <Typography
            variant="p"
            gutterBottom
            component="div"
            style={{color:'red'}}
            
          >
              Favor de ingresar un valor.
          </Typography> : ''}

      


          <InputLabel id="area-label">Área</InputLabel>
            <Select
              margin="dense"
              labelId="area-label"
              id="area"
              value={enteredArea}
              label="Área"
              onChange={onChangeArea}
              variant="standard"
              fullWidth


            >
              <MenuItem value='Dirección de Tecnologías y Plataformas'>Dirección de Tecnologías y Plataformas</MenuItem>
              <MenuItem value='Coordinación Administrativa'>Coordinación Administrativa</MenuItem>
              <MenuItem value='Órgano Interno de Control'>Órgano Interno de Control</MenuItem>
            </Select>
          

        
          <TextField
            margin="dense"
            id="entidad"
            label="Entidad"
            type="text"
            fullWidth
            variant="standard"
            onChange={onChangeEntidad}
            value={enteredEntidad}
            disabled

          />
            <InputLabel id="puesto-label">Puesto</InputLabel>
            <Select
              margin="dense"
              labelId="puesto-label"
              id="puesto"
              value={enteredPuesto}
              label="Puesto"
              onChange={onChangePuesto}
              variant="standard"
              fullWidth
            >
              <MenuItem value='Desarrollador'>Desarrollador</MenuItem>
              <MenuItem value='Subdirector'>Subdirector</MenuItem>
              <MenuItem value='Director'>Director</MenuItem>
            </Select>
            <InputLabel id="permisos-label">Permisos</InputLabel>
            <Select
              margin="dense"
              labelId="permisos-label"
              id="permisos"
              value={enteredPermission}
              label="Permisos"
              onChange={onChangePermission}
              variant="standard"
              fullWidth
            >
              <MenuItem value='Administrador'>Administrador</MenuItem>
              <MenuItem value='Usuario'>Usuario</MenuItem>
            </Select>
            
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