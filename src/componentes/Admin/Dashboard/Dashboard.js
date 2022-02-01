import React, { Component } from "react";
import { useState, useEffect } from "react";
import { Grid, Box, Button } from "@mui/material";
import Login from "../Login/Login";
import Card from "./Card";
import InfoPersonal from "./InfoPersonalCard";
import EditInfoPersonal from "./EditInfoPersonal";
import "./Dashboard.css";
const licitaciones = [
  {
    id: "l1",
    idC: "l1",
    title: "Papel de baño",
    status: "Abierta",
  },
  { 
    id: "l2", 
    idC: "l2", 
    title: "Monitores", 
    status: "Abierta",
 },
  {
    id: "l3",
    idC: "l3",
    title: "Servicio de impresoras",
    status: "Abierta",
  },
  {
    id: "l4",
    idC: "l4",
    title: "Muebles de oficina",
    status: "Abierta",
  },
];
const usuariosRegistrados = [
  {
    id: "u1",
    idC: "u1",
    title: "Raul Jacinto",
    status: "Activo",
  },
  { 
    id: "u2", 
    idC: "u2", 
    title: "Zahir Gutiérrez", 
    status: "Activo",
 },
  {
    id: "u3",
    idC: "u3",
    title: "Galilea ",
    status: "Activo",
  },

];
const usuarios=[{
  nombre: 'Daniel Alejandro Gutiérrez Hernández',
  area: 'Dirección de Tecnologías y Plataformas',
  entidad:'SESAJ',
  puesto:'Desarrollador',
  permisos:'Administrador',
  email:'daniel@gmail.com',
  pass:'Daniel11'
}]

function Dashboard() {
  //arreglo datos de usuario
  const [user, setUser] = useState(usuarios);  
  const [sentUser, setSentUser] = useState(usuarios);  
  //variable de sesión
  const [loggedIn, setLogStatus] = useState(false); 
    /** 
      Toma el valor de localStorage y valida si es = 1
      Si lo es, coloca el valor de sesión = true
    */
 
    /**
      función handler_updateUser
      Actualiza la información del usuario con la sesión abierta
      Parametros:
        personalID = Arreglo de información del usuaurio actualizada 
        
    */
  const handler_updateUser = (personalD) => {
   
    setSentUser({...personalD});
    setUser(prevArray  => [...prevArray , personalD]);

    
  };
  const handler_guardarUsuario = (personalD) =>{
    setUser(prevArray  => [...prevArray , personalD]);
    console.log(user)
    
  }
    /** 
      función handler_login
      actualiza la variable de sesión a true
      envía a InfoPersonal la información del usuario con la sesión activa
    */
  const handler_login= (id) =>{
    setLogStatus(true);
    localStorage.setItem('isLoggedIn', '1');
    setSentUser(user[id]);
  };
  /**
      función handler_login
      actualiza la variable de sesión a false
    */
  const handler_logout = () =>{
    setLogStatus(false);
    localStorage.removeItem('isLoggedIn');
  };
  //valida la variable de sesión si es false muestra el login si es true regresa el Dashboard
  if (!loggedIn){ 
    return(
    <Grid container>
      <Grid item xs={12} sm={12}>
        <Box textAlign='center' sx={{ width: 1/3 }} m="auto" pt={3}>
            <Login onLogin={handler_login} users={user}
            onGuardarUsuario={handler_guardarUsuario}/>
        </Box>

      </Grid>
      <Grid item xs={12} sm={12}>
    </Grid>
    </Grid>

    )
  }
  
  return (
    <Grid container> 
      <Grid item xs={12} sm={12} textAlign="right" m={2}>
        <Button onClick={handler_logout}>Logout</Button>
      </Grid>
      <Grid item xs={12} sm={2} mt={12} m={10}>
        <Card title="Licitaciones en curso" data={licitaciones}/>
        
      </Grid>
      <Grid item xs={12} sm={2} mt={12} m={10}>
        <Card title="Usuarios activos" data={usuariosRegistrados}/>
      </Grid>
      <Grid item xs={12} sm={3} m={2}>
        <InfoPersonal
          data={sentUser}
        />
        <Box textAlign='center'>
        <EditInfoPersonal
          onUpdateUser={handler_updateUser}
          title="Editar información personal"
          data={sentUser}
        ></EditInfoPersonal>
        </Box>
      </Grid>
     
    </Grid>
  );
}

export default Dashboard;
