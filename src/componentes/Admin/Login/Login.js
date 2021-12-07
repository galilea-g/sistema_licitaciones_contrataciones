import { useState } from "react";
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {    Typography } from "@mui/material";


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
    /**
      Función handler_submitLogin
      valida si el usuario y la contraseña ingresados son correctos

    */
  const handler_submitLogin = (event) => {

   
    event.preventDefault();
    if(props.users['email'] == enteredEmail){
        if(props.users['pass'] == enteredPass){
            props.onLogin();
            setValided(true);
        }
        else{
          setValided(false);
        }
    }
    else{
      setValided(false);
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
          <Button onClick={handler_submitLogin}>Guardar</Button>
          
        </form>
    </div>
  );
}