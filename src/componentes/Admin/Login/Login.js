import { useState } from "react";
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {    Typography } from "@mui/material";
import Registro from "../../Admin/Dashboard/Registro"


/*
Añadir Autor, funcionalidad y contenido de los props
*/ 
export default function FormDialog(props) {
  //variable del correo
  const [enteredEmail, setEnteredEmail] = useState(''); 
  //variable de contraseña
  const [enteredPass, setEnteredPass] = useState(''); 
  //variable de validación de datos
  const [isValid, setValided] = useState(true); 
  /**Al cambiar el campo de correo guarda lo ingresado en la variable correspondiente*/
  const onChangeEmail = (event) =>{ 
    if(event.target.value.trim().length>0){
      setValided(true);
    }
    setEnteredEmail(event.target.value)

  }
  /**Al cambiar el campo de correo guarda lo ingresado en la variable correspondiente*/
  const onChangePass = (event) =>{
    if(event.target.value.trim().length>0){
      setValided(true);
    }
    setEnteredPass(event.target.value)
  }
  const handler_updateUser = (personalD) => {
    props.onGuardarUsuario(personalD)
  }
    /**
      Función handler_submitLogin
      valida si el usuario y la contraseña ingresados son correctos

    */
   
  const handler_submitLogin = (event) => {

   
    event.preventDefault();
    //Busca en la lista de usuarios conicidencia de email y contraseña
    const isUserValid = (user) => user.email === enteredEmail && user.pass === enteredPass; 
    if(props.users.find(isUserValid)){
      let id = props.users.findIndex(isUserValid) 
      props.onLogin(id);//Acepta el login y regresa el id del usuario que ingresa
      setValided(true);//Valida el formulario
    }
    else{
      setValided(false);//Invalida el formulario
    }
}
  return (
    <div>
            
        <form className={` ${!isValid ? 'invalid' : ''}`}>
     
        <Typography
          variant="h5"
          gutterBottom
          component="div"
          className="padT_50"
          
        >
            Iniciar sesión        
        </Typography>
        {!isValid ? 
        <Typography
          variant="p"
          gutterBottom
          component="div"
          style={{color: 'red'}}
          
        >
            Usuario y contraseña incorrectos        
        </Typography> : ''}

          <TextField
          error={!isValid} 
            autoFocus
            margin="dense"
            id="correo"
            label="Correo"
            type="text"
            fullWidth
            variant="standard"
            onChange={onChangeEmail}



          />
          <TextField
          error={!isValid}
            margin="dense"
            id="pass"
            label="Contraseña"
            type="password"
            fullWidth
            variant="standard"
            onChange={onChangePass}

          />
          <Button onClick={handler_submitLogin}>Entrar</Button>
          <Registro
          title="Crear usuario nuevo"
          data=''
          onUpdateUser={handler_updateUser}

        ></Registro>
          
        </form>
    </div>
  );
}